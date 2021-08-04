import { gql } from '@apollo/client';
import React from 'react';
import { Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import { List, useDeleteListByIdMutation } from '../../types/graphql-generated';
import { CURRENT_USER_QUERY, useUser } from '../hooks/useUser';
import getItemCount from '../lib/getItemsFromList';

export const DELETE_LIST_MUTATION = gql`
    mutation deleteListById($id: ID!) {
        deleteList(id: $id) {
            id
        }
    }
`;

const Lists = (): JSX.Element => {
    const user = useUser();
    const [deleteList, { loading, error, data }] = useDeleteListByIdMutation({
        // optional: queries that will be re-fetched after the mutation
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });

    const handleDelete = async (list: List) => {
        if (list && list.id && confirm(`Really delete ${list.title} ?`)) {
            await deleteList({
                variables: {
                    id: list.id,
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
        <nav>
            <ul>
                {user.lists?.map((list: List) => (
                    <li key={list.id}>
                        <Link to={`/list/${list.id}`}>
                            {list.title} ({getItemCount(list?.items)} items)
                        </Link>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-small btn-error btn-ghost"
                            onClick={() => handleDelete(list)}
                        >
                            <Trash2 size={16} />
                        </button>
                    </li>
                ))}
            </ul>
            <p className="terminal-prompt">
                <Link to="/list/new" className="no-style">
                    Create new RetroList...
                </Link>
            </p>
        </nav>
    );
};

export default Lists;
