import { gql } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router';
import { useCreateListMutation } from '../../types/graphql-generated';
import useForm from '../hooks/useForm';
import { CURRENT_USER_QUERY, useUser } from '../hooks/useUser';
import ErrorMessage from './ErrorMessage';
import FormStyles from './FormStyles';

export const CREATE_LIST_MUTATION = gql`
    mutation createList(
        $title: String!
        $subtitle: String!
        $user: UserRelateToOneInput!
    ) {
        createList(data: { title: $title, subtitle: $subtitle, user: $user }) {
            id
        }
    }
`;

const CreateList = (): JSX.Element => {
    const history = useHistory();
    const user = useUser();

    // form change handler for signin
    const { inputs, handleChange, resetForm } = useForm({
        title: '',
        subtitle: '',
    });

    const [handleCreateList, { data, loading, error }] = useCreateListMutation({
        variables: {
            user: {
                connect: {
                    id: user?.id ?? '',
                },
            },
            title: `${inputs.title}`,
            subtitle: `${inputs.subtitle}`,
        },
        // refetch the currently logged in user
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
        awaitRefetchQueries: true,
    });

    // submit sign in credentials
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // sign in to backend
        const res = await handleCreateList();
        // on success, redirect to products
        if (res?.data?.createList?.id) {
            history.replace('/lists');
        }
        // TODO: error handling
    };

    return (
        <FormStyles method="POST" onSubmit={handleSubmit}>
            <legend>Create new Retrolist</legend>

            <ErrorMessage error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
                <div className="form-group">
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
                </div>
                <div className="form-group">
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
                </div>
            </fieldset>
            <button className="btn btn-primary" type="submit">
                Create List
            </button>
        </FormStyles>
    );
};

export default CreateList;
