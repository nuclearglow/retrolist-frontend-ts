import React from 'react';
import { useUser } from '../hooks/useUser';
import { getTotalItems } from '../lib/listUtils';
import SignOut from './SignOut';

const Profile = (): JSX.Element | null => {
    const user = useUser();

    if (!user) {
        return null;
    }

    return (
        <table>
            <caption>Retrolist User Profile</caption>
            <tbody>
                <tr>
                    <td>Username</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Retrolists</td>
                    <td>{user.lists.length ?? 0}</td>
                </tr>
                <tr>
                    <td>Items</td>
                    <td>{getTotalItems(user.lists)}</td>
                </tr>
                <tr>
                    <td>Actions</td>
                    <td>
                        <SignOut />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Profile;
