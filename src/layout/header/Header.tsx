import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Navigation } from '../../components/navigation/Navigation';

const navItems = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/',
        title: 'About me'
    },
    {
        link: '/',
        title: 'Projects'
    },
    {
        link: '/',
        title: 'Contact'
    },
]

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Navigation navItems={navItems} />
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    /* border: 1px solid red; */
    padding: 0 160px;
`



