const fs = require('fs')
const du = require('du')
const { NodeSSH } = require('node-ssh')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const name = require('../package.json').name
const version = require('../package.json').version

require('dotenv').config()

/**
 * Deployment: connect to SSH, clean up files, copy build folder to remote
 */
console.log(`Deploying ${process.env.npm_package_name}@${process.env.npm_package_version}`)

const deploy = async () => {
    const ssh = new NodeSSH()

    console.log(`Connecting to ${process.env.DEPLOYMENT_HOST}`)

    await ssh.connect({
        host: process.env.DEPLOYMENT_HOST,
        username: process.env.DEPLOYMENT_USERNAME,
        port: 22,
        privateKey: process.env.DEPLOYMENT_SSH_PRIVATE_KEY_PATH,
        passphrase: fs.readFileSync(process.env.DEPLOYMENT_SSH_PRIVATE_KEY_PASS_PATH, 'utf8').trim()
    })

    // Get local list of files to deploy
    let localFiles = []
    let result = await exec('find . -type f -print', { cwd: './build' })
    if (result.stdout) {
        localFiles = result.stdout.split('\n').filter((f) => f !== '.')
    }

    // Get remote list of files currently deployed
    let remoteFiles = []
    result = await ssh.execCommand('find . -type f -print', { cwd: process.env.DEPLOYMENT_PATH })
    if (result.stdout) {
        remoteFiles = result.stdout.split('\n').filter((f) => f !== '.' && f !== './VERSION')
    }

    // compute difference -> files to delete remotely afterwards
    const filesToDelete = remoteFiles.filter((f) => !localFiles.includes(f))

    // compute upload size
    const size = await du('build')
    const deploymentSize = (size / 1024 / 1024).toFixed(2)

    console.log(`Uploading ${localFiles.length} files (${deploymentSize} MB)`)

    // upload build/
    const failed = []
    const successful = []
    const status = await ssh.putDirectory('build/', process.env.DEPLOYMENT_PATH, {
        recursive: true,
        concurrency: 1,
        tick: (localPath, remotePath, error) => {
            if (error) {
                console.log(error);
                failed.push(localPath)
            } else {
                process.stdout.write(".");
                successful.push(localPath)
            }
        }
    })

    if (status && !failed.length) {
        console.log("");
        console.log('Upload complete')

        if (filesToDelete.length > 0) {
            console.log(`Cleaning up...`)

            for (let i = 0; i < filesToDelete.length; i++) {
                let f = filesToDelete[i]
                let result = await ssh.execCommand(`rm ${f}`, { cwd: process.env.DEPLOYMENT_PATH })
                if (!result.code) {
                    console.log(`Deleted obsolete remote file: ${f}`)
                } else if (result.stderr) {
                    console.log(result.stderr)
                }
            }
        }

        // creating a deployed version file
        result = await ssh.execCommand(`echo ${version} > VERSION`, { cwd: process.env.DEPLOYMENT_PATH })
        if (result.code > 0) {
            console.log(result.stderr)
        }

        console.log('Deployment complete')
    } else {
        console.log("");
        console.log('Deployment failed!')
        if (failed.length) {
            console.log('failed transfers')
            console.log(failed.join('\n'))
        }
        process.exit(1)
    }

    ssh.dispose()
}

deploy()
