import gql from 'graphql-tag';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../types/graphql-generated';
import useForm from '../hooks/useForm';
import useQueryParams from '../hooks/useQueryParams';
import { CURRENT_USER_QUERY } from '../hooks/useUser';
import { ActionBarStyles } from './ActionStyles';
import DisplayError from './ErrorMessage';
import FormStyles from './FormStyles';
import Message from './Message';

// sign in in with keystone graphql
export const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
            # on success, returns this
            ... on UserAuthenticationWithPasswordSuccess {
                item {
                    id
                    email
                    name
                }
            }
            # on failure, this
            ... on UserAuthenticationWithPasswordFailure {
                code
                message
            }
        }
    }
`;

const Login = (): JSX.Element => {
    // form change handler for signin
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
    });
    const history = useHistory();

    const [handleSignIn, { data, loading }] = useLoginMutation({
        variables: {
            email: `${inputs.email}`,
            password: `${inputs.password}`,
        },
        // refetch the currently logged in user
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
        awaitRefetchQueries: true,
    });

    const queryParams = useQueryParams();

    const registerSuccess = queryParams.get('registerSuccess')
        ? 'Successfully signed up! Please check your mailbox for account verification...'
        : null;

    const requestVerificationSuccess = queryParams.get(
        'requestVerificationSuccess',
    )
        ? 'Please check your mailbox for account verification...'
        : null;

    const resetSuccess = queryParams.get('verificationSuccess')
        ? 'Your account is verified! Please login now...'
        : null;

    // the query completes successfully, so we need to check for the failure type "UserAuthenticationWithPasswordFailure"
    const error =
        data?.authenticateUserWithPassword?.__typename ===
        'UserAuthenticationWithPasswordFailure'
            ? data?.authenticateUserWithPassword.message
            : undefined;

    // submit sign in credentials
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // sign in to backend
        const res = await handleSignIn();

        // on success, redirect to products
        if (
            res.data?.authenticateUserWithPassword?.__typename ===
            'UserAuthenticationWithPasswordSuccess'
        ) {
            history.replace('/lists');
        } else {
            // on failure, reset the form
            resetForm();
        }
    };

    return (
        <FormStyles method="POST" onSubmit={handleSubmit}>
            <legend>Login</legend>

            <DisplayError error={error} />

            <Message>
                {registerSuccess || resetSuccess || requestVerificationSuccess}
            </Message>

            <fieldset disabled={loading} aria-busy={loading}>
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            value={`${inputs.email}`}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                        <input
                            required
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={`${inputs.password}`}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </fieldset>
            <ActionBarStyles>
                <button className="btn btn-primary" type="submit">
                    Sign In
                </button>
                <Link to="/request/reset">I forgot my password...</Link>
            </ActionBarStyles>
        </FormStyles>
    );
};

export default Login;
