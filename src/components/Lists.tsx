import { gql } from '@apollo/client';
import React from 'react';
import { Edit2, List as ListIcon, PlusCircle, Trash2 } from 'react-feather';
import { Link, Redirect } from 'react-router-dom';
import { List, useDeleteListByIdMutation } from '../../types/graphql-generated';
import { CURRENT_USER_QUERY, useUser } from '../hooks/useUser';
import { getItemCount } from '../lib/listUtils';
import { ActionLinkStyles, ActionListStyles } from './ActionStyles';
import Message from './Message';

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
                <Link to="/login">Login</Link> or{' '}
                <Link to="/register">Register</Link> to use Retrolist.
            </p>
        );
    } else if (!user.verified) {
        return (
            <Redirect to="/request/verification?unverifiedAccountError=true" />
        );
    }

    return (
        <nav>
            <ul>
                {user.lists?.map((list: List) => (
                    <ActionListStyles key={list.id}>
                        <ListIcon size={16} />
                        &nbsp;
                        <Link to={`/list/${list.id}`}>
                            {list.title} &gt; {list.subtitle} (
                            {getItemCount(list?.items)} items)
                        </Link>
                        &nbsp;
                        <Link to={`/list/edit/${list.id}`}>
                            <Edit2 size={16} />
                        </Link>
                        <button
                            type="button"
                            className="btn btn-small btn-error btn-ghost"
                            onClick={() => handleDelete(list)}
                        >
                            <Trash2 size={16} />
                        </button>
                    </ActionListStyles>
                ))}
            </ul>
            {user?.lists?.length === 0 && (
                <Message>You have no Retrolists yet. Create one now...</Message>
            )}

            <Link to="/list/new" className="no-style">
                <ActionLinkStyles>
                    <PlusCircle />
                    <p>Create new RetroList...</p>
                </ActionLinkStyles>
            </Link>
        </nav>
    );
};

export default Lists;
