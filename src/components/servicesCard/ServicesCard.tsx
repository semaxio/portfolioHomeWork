import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type SevicesCardPropsType = {
    bordered: boolean
    iconId: string
    iconHeight?: string,
    iconWidth?: string,
    iconView?: string,
    title: string
    text: string
}

export const ServicesCard = (props: SevicesCardPropsType) => {
    return (
        <StyledCard {...props}>
            <Icon iconId={props.iconId} height={props.iconHeight} width={props.iconWidth} viewBox={props.iconView} />
            <StyledP {...props}>{props.title}</StyledP>
            <StyledSpan>{props.text}</StyledSpan>
        </StyledCard>
    );
};

const StyledCard = styled.div<SevicesCardPropsType>`
    text-align: center;
    width: 341px;
    height: 338px;
    /* padding: 75px 22px; */
    border: ${props => props.bordered ? '3px solid #7562E0' : '3px solid #f5f5f5'};
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledP = styled.p<SevicesCardPropsType>`
    color: ${props => props.bordered ? '#f5f5f5' : '#7562E0'};
    font-size: 24px;
    font-weight: bold;
    max-width: 290px;
`

const StyledSpan = styled.span`
    /* margin-top: 16px; */
    color: #fff;
    font-size: 17px;
    max-width: 260px;
`
