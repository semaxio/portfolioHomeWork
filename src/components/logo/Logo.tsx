import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <StyledLink href='/'>
            <Icon iconId='logo' width='196px' height='42px' viewBox='"0 0 196 42"'/>
        </StyledLink>
    );
};


const StyledLink = styled.a`
    padding-top: 29px;
`