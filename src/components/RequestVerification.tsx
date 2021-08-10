import gql from 'graphql-tag';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRequestVerificationEmailMutation } from '../../types/graphql-generated';
import useForm from '../hooks/useForm';
import useQueryParams from '../hooks/useQueryParams';
import DisplayError from './ErrorMessage';
import FormStyles from './FormStyles';

// sign in in with keystone graphql
export const REQUEST_VERIFICATION_MUTATION = gql`
    mutation requestVerificationEmail($email: String!) {
        requestVerificationEmail(email: $email)
    }
`;

const RequestVerification = (): JSX.Element => {
    const queryParams = useQueryParams();
    const history = useHistory();
    // form change handler for signin
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    });
    const [requestVerification, { data, loading, error }] =
        useRequestVerificationEmailMutation({
            variables: {
                email: `${inputs.email}`,
            },
        });

    const verificationError = queryParams.get('verificationError')
        ? 'Account verification failed! Please request a new verification email...'
        : null;

    const unverifiedAccountError = queryParams.get('unverifiedAccountError')
        ? 'Your account is not verified yet! Check your inbox for a verification email or request a new verification email below...'
        : null;

    // submit sign in credentials
    const handleResetVerification = async (e: React.FormEvent) => {
        e.preventDefault();
        // sign in to backend - handling of errors is done elsewhere, so we can just error it to console
        const res = await requestVerification();
        if (res.data?.requestVerificationEmail === 'Accepted') {
            history.replace('/login?requestVerificationSuccess=true');
        }
        resetForm();
    };

    return (
        <FormStyles method="POST" onSubmit={handleResetVerification}>
            <legend>Request Verification Email</legend>

            <DisplayError
                error={verificationError || unverifiedAccountError || error}
            />

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
            </fieldset>
            <button className="btn btn-primary" type="submit">
                Resend Verification Link
            </button>
        </FormStyles>
    );
};

export default RequestVerification;
