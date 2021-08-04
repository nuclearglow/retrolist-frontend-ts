import { ApolloError, isApolloError, ServerError } from '@apollo/client';
import React from 'react';

const ErrorMessage = ({
    error,
}: {
    error: ApolloError | string;
}): JSX.Element | null => {
    // no error -> render out nothing
    if (!error) return null;

    // error is a string
    if (typeof error === 'string') {
        return (
            <div className="terminal-alert terminal-alert-error">{error}</div>
        );
    }

    // error is an ApolloError, we assume ApolloServerError and output the errors
    if (isApolloError(error)) {
        return (error?.networkError as ServerError)?.result?.errors.map(
            (error: Error, i: number) => (
                <div className="terminal-alert terminal-alert-error" key={i}>
                    {error.message.replace('GraphQL error: ', '')}
                </div>
            ),
        );
    }
    return (
        <div className="terminal-alert terminal-alert-error">
            {(error as Error).message.replace('GraphQL error: ', '')}
        </div>
    );
};

export default ErrorMessage;
