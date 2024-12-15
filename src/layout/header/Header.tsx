import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Navigation } from '../../components/navigation/Navigation';

const navItems = [
    {
        link: '#home',
        title: 'Home'
    },
    {
        link: '#about',
        title: 'About me'
    },
    {
        link: '#projects',
        title: 'Projects'
    },
    {
        link: '#contact',
        title: 'Contact'
    },
]

const Header = () => {
    return (
        <StyledContainer>
            <StyledHeader>
                <Logo />
                <Navigation navItems={navItems} />
            </StyledHeader>
        </StyledContainer>
    );
};

export default Header;

const StyledHeader = styled.header`
    width: 100%;
    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`

const StyledContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #181824;
`



