# retrolist frontend

A simple todo app using preact and apollo-client

# dev

-   `npm i`
-   `npm start`

Runs the app in the development mode.
Open http://localhost:7777 to view it in the browser.

# deploy

.envrc

```
export DEPLOYMENT_HOST="109.239.58.141"
export DEPLOYMENT_USERNAME="deployer"
export DEPLOYMENT_SSH_PRIVATE_KEY_PATH="/home/nuky/.ssh/id_deployer"
export DEPLOYMENT_SSH_PRIVATE_KEY_PASS_PATH="/home/nuky/.ssh/id_deployer.pwd"
export DEPLOYMENT_PATH="/home/deployer/deployments/retrolist/frontend"
```

-   `npm run deploy`
