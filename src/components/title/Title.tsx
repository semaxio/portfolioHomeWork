import React from 'react';
import styled from 'styled-components';

type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle>
            {props.title}
        </StyledTitle>
    );
};


const StyledTitle = styled.h3`
    margin: 0;
    color: #7562E0;
    font-size: 32px;
`