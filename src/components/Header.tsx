import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const HeaderStyles = styled.header`
    grid-area: header;
    height: 32px;

    img {
        height: 100%;
    }
`;

const Header = (): JSX.Element => (
    <HeaderStyles>
        <Title />
    </HeaderStyles>
);

export default Header;
