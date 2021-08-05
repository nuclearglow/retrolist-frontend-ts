import { ApolloError, isApolloError, ServerError } from '@apollo/client';
import type { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';

const ErrorMessage = ({
    error,
}: {
    error: Maybe<ApolloError | string>;
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
        return (
            <>
                {error.networkError &&
                    (error?.networkError as ServerError)?.result?.errors.map(
                        (error: Error, i: number) => (
                            <div
                                className="terminal-alert terminal-alert-error"
                                key={i}
                            >
                                {error.message.replace('GraphQL error: ', '')}
                            </div>
                        ),
                    )}
                {error.message && (
                    <div className="terminal-alert terminal-alert-error">
                        Error:&nbsp;{(error as Error).message}
                    </div>
                )}
            </>
        );
    }

    return <p></p>;
};

export default ErrorMessage;
