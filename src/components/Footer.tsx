import React from 'react';
import { Info, User } from 'react-feather';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../hooks/useUser';
import BackButton from './BackButton';
import ItemCreate from './ItemCreate';

const FooterStyles = styled.footer`
    grid-area: footer;
    min-height: 60px;

    &,
    .left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .left {
        min-width: 120px;
    }

    .right {
        text-align: right;
    }

    img {
        height: 100%;
    }
`;

const Footer = (): JSX.Element => {
    const match = useRouteMatch<{ id: string }>('/list/:id');
    const user = useUser();

    // Show back button for each list view, create items only on list detail view
    return (
        <FooterStyles>
            <div className="left">
                <BackButton />
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
                        <Link to="/imprint">
                            <button
                                type="button"
                                className="btn btn-small btn-ghost"
                            >
                                <Info />
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            <div className="right">
                {match?.params?.id && match.params.id !== 'new' && (
                    <ItemCreate listId={match.params.id} />
                )}
            </div>
        </FooterStyles>
    );
};

export default Footer;
