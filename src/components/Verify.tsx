import { gql } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useVerifyUserMutation } from '../../types/graphql-generated';
import useQueryParams from '../hooks/useQueryParams';

// reset the password with keystone graphql redeem method
export const VERIFY_MUTATION = gql`
    mutation verifyUser($verificationToken: String!) {
        verifyUser(verificationToken: $verificationToken)
    }
`;

const Verify = (): JSX.Element => {
    const queryParams = useQueryParams();
    const [verified, setVerified] = useState(false);
    const [verificationError, setVerificationError] = useState(false);
    const [handleVerification] = useVerifyUserMutation();

    const token = queryParams.get('token');

    useEffect(() => {
        console.log('Effect: Account Verification');

        const verify = async () => {
            if (!verified && token && token !== '') {
                try {
                    const res = await handleVerification({
                        variables: {
                            verificationToken: token,
                        },
                    });
                    if (res.data?.verifyUser === 'Verified') {
                        setVerified(true);
                    }
                } catch (error) {
                    setVerificationError(true);
                }
            }
        };
        verify();
    }, [token]);

    // handle error -> provide a form to resend the verification link

    if (verified) {
        return <Redirect to="/login?verificationSuccess=true" />;
    } else if (verificationError) {
        return <Redirect to="/request/verification?verificationError=true" />;
    }
    return <p>Account Verification running...</p>;
};

export default Verify;
