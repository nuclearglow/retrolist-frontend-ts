import React from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import RequestReset from './RequestReset';

const GridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;
`;

const Auth = (): JSX.Element => (
    <GridStyles>
        <Login />
        <Register />
        <RequestReset />
    </GridStyles>
);

export default Auth;
