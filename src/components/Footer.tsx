import React from 'react';
import { ArrowLeft, User } from 'react-feather';
import { useRouteMatch } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../hooks/useUser';
import CreateItems from './CreateItems';

const FooterStyles = styled.footer`
    grid-area: footer;
    min-height: 60px;

    &,
    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .left {
        width: 20%;
    }

    img {
        height: 100%;
    }
`;

const Footer = (): JSX.Element => {
    const match = useRouteMatch<{ id: string }>('/list/:id');
    const history = useHistory();
    const user = useUser();

    // Show back button for each list view, create items only on list detail view
    return (
        <FooterStyles>
            <div className="left">
                <button
                    type="button"
                    className="btn btn-small btn-primary btn-ghost"
                    onClick={history.goBack}
                >
                    <ArrowLeft />
                </button>
                {user?.id && (
                    <div className="user-actions">
                        <Link to="/profile">
                            <button
                                type="button"
                                className="btn btn-small btn-ghost"
                            >
                                <User />
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            <div className="right">
                {match?.params?.id && match.params.id !== 'new' && (
                    <CreateItems listId={match.params.id} />
                )}
            </div>
        </FooterStyles>
    );
};

export default Footer;