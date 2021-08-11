import styled from 'styled-components';

export const AmountStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .more {
        color: var(--subtitle-color);
    }
`;

export const AmountButtonStyles = styled.button`
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
    font-size: calc(var(--global-font-size) * 2);
`;
