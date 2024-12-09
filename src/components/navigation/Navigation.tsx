import React from 'react';
import styled from 'styled-components';

interface itemNavigationPropsType {
    link: string
    title: string
}


export const Navigation = (props: { navItems: Array<itemNavigationPropsType> }) => {
    return (
        <StyledNavigation>
            <ul>{
                props.navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>
                            {item.title}
                        </a>
                    </li>
                ))
            }
            </ul>
        </StyledNavigation>
    );
};


const StyledNavigation = styled.nav`

    ul {
        padding: 0;
        display: flex;
        gap: 52px;
    }


    li {
        list-style: none;
        font-size: 18px;
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    a:hover {
        color: #7562E0;
    }
`