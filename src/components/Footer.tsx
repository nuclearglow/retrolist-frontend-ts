import React from 'react';
import { ArrowLeft } from 'react-feather';
import { useRouteMatch } from 'react-router';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CreateItems from './CreateItems';

const FooterStyles = styled.footer`
    grid-area: footer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 100%;
    }
`;

const Footer = (): JSX.Element => {
    const match = useRouteMatch<{ id: string }>('/list/:id');
    const history = useHistory();

    // Show back button for each list view, create items only on list detail view
    return (
        <FooterStyles>
            {match?.params?.id && (
                <button
                    type="button"
                    className="btn btn-small btn-primary btn-ghost"
                    onClick={history.goBack}
                >
                    <ArrowLeft />
                </button>
            )}
            {match?.params?.id && match.params.id !== 'new' && (
                <CreateItems listId={match.params.id} />
            )}
        </FooterStyles>
    );
};

export default Footer;
