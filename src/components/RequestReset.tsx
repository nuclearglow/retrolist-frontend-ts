import gql from 'graphql-tag';
import React from 'react';
import { useRequestResetMutation } from '../../types/graphql-generated';
import useForm from '../hooks/useForm';
import DisplayError from './ErrorMessage';
import FormStyles from './FormStyles';

// sign in in with keystone graphql
export const REQUEST_RESET_MUTATION = gql`
    mutation requestReset($email: String!) {
        sendUserPasswordResetLink(email: $email) {
            code
            message
        }
    }
`;

const RequestReset = (): JSX.Element => {
    // form change handler for signin
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    });

    const [requestReset, { data, loading, error }] = useRequestResetMutation({
        variables: {
            email: `${inputs.email}`,
        },
    });

    // submit sign in credentials
    const handleResetRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        // sign in to backend - handling of errors is done elsewhere, so we can just error it to console
        await requestReset();
        resetForm();
    };

    return (
        <FormStyles method="POST" onSubmit={handleResetRequest}>
            <legend>Request Password Reset</legend>

            <DisplayError error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
                {data?.sendUserPasswordResetLink === null && (
                    <p>Success! Check your email for a reset link!</p>
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
            </fieldset>
            <button className="btn btn-primary" type="submit">
                Request Password Reset
            </button>
        </FormStyles>
    );
};

export default RequestReset;
