import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type ButtonPropsType = {
    textValue: string
    scale?: string
    width?: string
    height?: string
    bgColor?: string
    color?: string
    iconId?: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
}

export const Button = (props: ButtonPropsType) => {

    if (!props.iconId) {
        return (
            <StyledButton {...props}>
                <span>{props.textValue}</span>
            </StyledButton>
        );
    }
    else {
        return (
            <StyledButton {...props}>
                <span>{props.textValue}</span>
                <Icon
                    iconId={props.iconId}
                    height={props.iconHeight || '16px'}
                    width={props.iconWidth || '16px'}
                    viewBox={props.iconViewBox || '0 0 16 16'}
                />
            </StyledButton>
        );
    }

};

const StyledButton = styled.button<ButtonPropsType>`
    border-radius: 8px ;
    color: ${props => props.color || '#fff'};
    border: 2px solid #7562E0;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: ${props => props.bgColor || 'transparent'};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '28px'};
    &:hover {
        /* background-color: #7562E0; */
        background-color: ${props => props.scale ? props.bgColor || 'transparent' : '#7562E0'};
        transform: scale(${props => props.scale || 1});
    }
`


