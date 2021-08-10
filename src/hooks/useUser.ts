import { gql } from '@apollo/client';
import { useCurrentUserQuery } from '../../types/graphql-generated';

export const CURRENT_USER_QUERY = gql`
    query currentUser {
        authenticatedItem {
            ... on User {
                id
                email
                name
                verified
                lists {
                    id
                    title
                    subtitle
                    items {
                        id
                        title
                        quantity
                    }
                }
            }
        }
    }
`;

/**
 * Custom Hook: get the authenticated User and associated data from the backend
 * @returns authenticated user with data or undefined
 */
export const useUser = () => {
    const { data } = useCurrentUserQuery();
    return data?.authenticatedItem;
};
