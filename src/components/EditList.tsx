import { gql } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import {
    useEditListMutation,
    useListByIdQuery,
} from '../../types/graphql-generated';
import useForm from '../hooks/useForm';
import { CURRENT_USER_QUERY } from '../hooks/useUser';
import ErrorMessage from './ErrorMessage';
import FormStyles from './FormStyles';
import { QUERY_LIST_BY_ID } from './SingleList';

export const EDIT_LIST_MUTATION = gql`
    mutation editList($id: ID!, $title: String!, $subtitle: String!) {
        updateList(id: $id, data: { title: $title, subtitle: $subtitle }) {
            id
        }
    }
`;

const EditList = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const {
        data: listData,
        loading: listLoading,
        error: listError,
    } = useListByIdQuery({
        variables: { id },
    });
    const history = useHistory();

    const list = listData && listData.List;

    // form change handler for signin
    const { inputs, handleChange, resetForm } = useForm({
        title: list?.title ?? '',
        subtitle: list?.subtitle ?? '',
    });

    const [handleUpdateList, { data, loading, error }] = useEditListMutation({
        variables: {
            id,
            title: `${inputs.title}`,
            subtitle: `${inputs.subtitle}`,
        },
        // refetch the currently logged in user and the current list
        refetchQueries: [
            { query: CURRENT_USER_QUERY },
            { query: QUERY_LIST_BY_ID, variables: { id } },
        ],
        awaitRefetchQueries: true,
    });

    // submit sign in credentials
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // sign in to backend
        const res = await handleUpdateList();
        // on success, redirect to products
        if (res?.data?.updateList?.id) {
            history.replace('/lists');
        }
        // TODO: error handling
    };

    return (
        <FormStyles method="POST" onSubmit={handleSubmit}>
            <legend>
                Edit {list?.title} - {list?.subtitle}
            </legend>

            <ErrorMessage error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="title">
                    Title
                    <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        autoComplete="title"
                        value={`${inputs.title}`}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="subtitle">
                    Subtitle
                    <input
                        required
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        placeholder="Subtitle"
                        value={`${inputs.subtitle}`}
                        onChange={handleChange}
                    />
                </label>
            </fieldset>
            <button className="btn btn-primary" type="submit">
                Save
            </button>
        </FormStyles>
    );
};

export default EditList;
