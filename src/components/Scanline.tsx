import React from 'react';
import styled from 'styled-components';

interface ScanlineProps {
    scanlineHeight: number;
    scanlineSpeed: number;
}

const ScanlineStyles = styled.div<ScanlineProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${({ scanlineHeight }) =>
        scanlineHeight ? `${scanlineHeight}em` : '1em'};
    opacity: 0.1;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(255, 250, 250, 1) 50%,
        rgba(100, 255, 100, 1) 50%,
        transparent 100%
    );
    animation: scanline
        ${({ scanlineSpeed }) => (scanlineSpeed ? `${scanlineSpeed}s` : '16s')}
        ease-in-out infinite;
    pointer-events: none;
`;

const Scanline = (): JSX.Element => {
    return <ScanlineStyles scanlineHeight={1} scanlineSpeed={16} />;
};

export default Scanline;
