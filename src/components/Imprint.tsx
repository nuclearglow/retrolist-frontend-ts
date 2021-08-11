import React from 'react';

const Imprint = (): JSX.Element => {
    return (
        <>
            <div className="terminal-prompt">Impressum</div>
            <p>Anbieter</p>
            <table>
                <tbody>
                    <tr>
                        <td>Sven Vowe</td>
                    </tr>
                    <tr>
                        <td>Nieder-Modauer Weg 5b</td>
                    </tr>
                    <tr>
                        <td>64367 Mühltal</td>
                    </tr>
                </tbody>
            </table>
            <p>Kontakt</p>
            <table>
                <tbody>
                    <tr>
                        <th>Telefon</th>
                        <td>
                            <a href="tel:+4961513604446">+4961513604446</a>
                        </td>
                    </tr>
                    <tr>
                        <th>E-Mail</th>
                        <td>
                            <a href="mailto:retrolist@svenvowe.de">
                                retrolist@svenvowe.de
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Website</th>
                        <td>
                            <a href="https://retrolist.svenvowe.de">
                                https://retrolist.svenvowe.de
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                Bei redaktionellen Inhalten verantwortlich nach § 55 Abs.2 RStV:
            </p>
            <table>
                <tbody>
                    <tr>
                        <td>Sven Vowe</td>
                    </tr>
                    <tr>
                        <td>Nieder-Modauer Weg 5b</td>
                    </tr>
                    <tr>
                        <td>64367 Mühltal</td>
                    </tr>
                </tbody>
            </table>
            <p>Retrolist verwendet</p>
            <ul>
                <li>
                    <a href="https://reactjs.org/">React</a>
                </li>
                <li>
                    <a href="https://terminalcss.xyz/dark/">Terminal.css</a>
                </li>
                <li>
                    <a href="https://www.apollographql.com/docs/react/">
                        Apollo Client
                    </a>
                </li>
                <li>
                    <a href="https://github.com/feathericons/react-feather">
                        React Feather
                    </a>{' '}
                    und <a href="https://feathericons.com/">Feather Icons</a>
                </li>
                <li>
                    <a href="https://styled-components.com/">
                        Styled Components
                    </a>
                </li>
                <li>
                    <a href="https://github.com/keystonejs/keystone/tree/master/packages/keystone">
                        Keystone.js 6
                    </a>
                </li>
                <li>
                    <a href="https://nodemailer.com/about/">Nodemailer</a>
                </li>
            </ul>
        </>
    );
};

export default Imprint;
