import { gql } from '@apollo/client';
import type { FC } from 'react';
import React from 'react';
import { Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import { List, useDeleteListByIdMutation } from '../../types/graphql-generated';
import { CURRENT_USER_QUERY, useUser } from '../hooks/useUser';
import getItemCountFromList from '../lib/getItemsFromList';

export const DELETE_LIST_MUTATION = gql`
    mutation deleteListById($id: ID!) {
        deleteList(id: $id) {
            id
        }
    }
`;

const Lists: FC = () => {
    const user = useUser();
    const [deleteList, { loading, error, data }] = useDeleteListByIdMutation({
        // optional: queries that will be re-fetched after the mutation
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });

    const handleDelete = async (id: string) => {
        if (id) {
            const res = await deleteList({
                variables: {
                    id,
                },
            });
        }
    };

    if (!user) {
        return (
            <p>
                <Link to="/signin">Login</Link> to access your lists.
            </p>
        );
    }
    return (
        <>
            <ul>
                {user.lists?.map((list: List) => (
                    <li key={list.id}>
                        <Link to={`/list/${list.id}`}>
                            {list.title} ({getItemCountFromList(list)} items)
                        </Link>
                        <button
                            type="button"
                            className="button"
                            onClick={() => handleDelete(list.id)}
                        >
                            <Trash2 />
                        </button>
                    </li>
                ))}
            </ul>
            <p className="terminal-prompt">
                <Link to="/list/new" className="no-style">
                    Create new RetroList...
                </Link>
            </p>
        </>
    );
};

export default Lists;
