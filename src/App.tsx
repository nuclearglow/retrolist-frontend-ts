import React from 'react';
import Div100vh from 'react-div-100vh';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ListCreate from './components/CreateList';
import EditList from './components/EditList';
import Footer from './components/Footer';
import Header from './components/Header';
import Imprint from './components/Imprint';
import Lists from './components/Lists';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import RequestReset from './components/RequestReset';
import RequestVerification from './components/RequestVerification';
import Reset from './components/Reset';
import Scanline from './components/Scanline';
import SingleList from './components/SingleList';
import Verify from './components/Verify';
import './styles/animations.css';
import './styles/fonts.css';
import './styles/terminal.css';

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        text-rendering: geometricPrecision;
    }

    html {
        margin: auto;
        overflow: hidden;

        --font-family: 'Hack', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --background-color: #1e1e1e;
        --global-font-size: 14px;
        --global-line-height: 1.4em;
        --global-space: 10px;
        --page-width: 60em;
        --subtitle-color: #f975f7;
        --font-color: #e8e9ed;
        --invert-font-color: #222225;
        --secondary-color: #a3abba;
        --tertiary-color: #a3abba;
        --primary-color: #62c4ff;
        --error-color: #ff3c74;
        --success-color: #00d22b;
        --progress-bar-background: #f975f7;
        --progress-bar-fill: #00d22b;
        --code-bg-color: #3f3f44;
        --quote-color: #9ca2ab;
        --input-style: solid;
        --display-h1-decoration: none;
        --global-scale-factor: 1;
    }

    *::-moz-selection {
        background: var(--primary-color);
        color: var(--invert-font-color);
    }

    *::selection {
        background: var(--primary-color);
        color: var(--invert-font-color);
    }

    body {
        background-color: var(--background-color);
        font-family: var(--font-family), monospace;
        font-size: var(--global-font-size);
        line-height: var(--global-line-height);
        color: var(--font-color);
        margin: 0;
        word-wrap: break-word;
    }

    @media screen and (max-width: 620px) {
    :root {
        --global-scale-factor: 0.666;
    }
}`;

const PageStyles = styled.div`
    height: 100%;
    /* grid container settings */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: calc(var(--global-scale-factor) * 150px) 1fr auto;
    grid-template-areas:
        'header'
        'main'
        'footer';
`;

const MainStyles = styled.main`
    grid-area: main;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 20px 20px 0 20px;
`;

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Div100vh>
                <PageStyles>
                    <GlobalStyles />
                    <Scanline />
                    <Header />
                    <MainStyles>
                        <Switch>
                            <Route path="/" exact>
                                <Lists />
                            </Route>

                            <Route path="/verify" exact>
                                <Verify />
                            </Route>

                            <Route path="/register" exact>
                                <Register />
                            </Route>

                            <Route path="/login" exact>
                                <Login />
                            </Route>

                            <Route path="/request/reset" exact>
                                <RequestReset />
                            </Route>
                            <Route path="/reset" exact>
                                <Reset />
                            </Route>

                            <Route path="/request/verification" exact>
                                <RequestVerification />
                            </Route>

                            <Route path="/lists" exact>
                                <Lists />
                            </Route>
                            <Route path="/list/new" exact>
                                <ListCreate />
                            </Route>
                            <Route path="/list/edit/:id">
                                <EditList />
                            </Route>
                            <Route path="/list/:id">
                                <SingleList />
                            </Route>

                            <Route path="/profile" exact>
                                <Profile />
                            </Route>

                            <Route path="/imprint" exact>
                                <Imprint />
                            </Route>
                        </Switch>
                    </MainStyles>
                    <Footer />
                </PageStyles>
            </Div100vh>
        </BrowserRouter>
    );
};

export default App;
