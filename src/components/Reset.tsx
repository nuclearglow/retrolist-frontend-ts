import { gql } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { useResetPasswordMutation } from '../../types/graphql-generated';
import useForm from '../hooks/useForm';
import useQueryParams from '../hooks/useQueryParams';
import DisplayError from './ErrorMessage';
import FormStyles from './FormStyles';

// reset the password with keystone graphql redeem method
export const RESET_MUTATION = gql`
    mutation resetPassword(
        $email: String!
        $password: String!
        $token: String!
    ) {
        redeemUserPasswordResetToken(
            email: $email
            password: $password
            token: $token
        ) {
            code
            message
        }
    }
`;

const Reset = (): JSX.Element => {
    const queryParams = useQueryParams();

    // form change handler for reset via token (link in email)
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
        token: queryParams.get('token') ?? '',
    });

    const [reset, { data, loading, error }] = useResetPasswordMutation({
        variables: {
            email: `${inputs.email}`,
            password: `${inputs.password}`,
            token: `${inputs.token}`,
        },
    });

    // api always is successful, so we need manual error handling: if no code, set the error
    const successfulError = data?.redeemUserPasswordResetToken?.code
        ? data?.redeemUserPasswordResetToken.message
        : undefined;

    // submit sign in credentials
    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        // sign in to backend - handling of errors is done elsewhere, so we can just error it to console
        await reset();
        resetForm();
    };

    return (
        <FormStyles method="POST" onSubmit={handleReset}>
            <h2>Reset Password</h2>

            <DisplayError error={error || successfulError} />

            <fieldset disabled={loading} aria-busy={loading}>
                {data?.redeemUserPasswordResetToken === null && (
                    <p>
                        Success! You can now <Link to="/auth">login</Link>!
                    </p>
                )}

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
            </fieldset>
            <button className="btn btn-primary" type="submit">
                Reset Password
            </button>
        </FormStyles>
    );
};

export default Reset;
