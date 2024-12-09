import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type AboutCardPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    text: string
}

export const AboutCard = (props: AboutCardPropsType) => {
    return (
        <StyledAboutCard>
            <Icon iconId={props.iconId} width={props.width || '16px'} height={props.height || '16px'} viewBox={props.viewBox || '0 0 16px 16px'}/>
            <span>{props.text}</span>
        </StyledAboutCard>
    );
};


const StyledAboutCard = styled.div`
    padding: 24px;
    width: 256px;
    height: 254px;
    background-color: #BDBDBD;

    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 18px;


    &:hover {
        background-color: #7562E0;
    }
    span {
        color: #fff;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.8em;
    }
`
