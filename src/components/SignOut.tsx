import { useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { LogOut } from 'react-feather';
import { useHistory } from 'react-router';
import { useSignoutMutation } from '../../types/graphql-generated';
import { CURRENT_USER_QUERY } from '../hooks/useUser';

// sign in in with keystone graphql
const SIGNOUT_MUTATION = gql`
    mutation signout {
        endSession
    }
`;

const SignOut = (): JSX.Element => {
    const [signOut] = useSignoutMutation({
        // refetch the currently logged in user
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
        awaitRefetchQueries: true,
    });
    const client = useApolloClient();
    const history = useHistory();

    const handleSignOut = async () => {
        await signOut();
        await client.clearStore();
        client.cache.gc();
        history.replace('/lists');
    };

    return (
        <button
            type="button"
            className="btn btn-small btn-error btn-ghost no-padding"
            onClick={handleSignOut}
        >
            <LogOut size={16} />
            &nbsp;Sign out
        </button>
    );
};

export default SignOut;
