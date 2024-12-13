import React from 'react'
import styled from 'styled-components'

type FlexWrapperType = {
    direction?: string
    justify?: string
    wrap?: string
    gap?: string
    alignItems?: string
    margin?: string
    padding?: string
}

export const FlexWrapper = styled.section<FlexWrapperType>`
    justify-content: ${props => props.justify || null};
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    align-items: ${props => props.alignItems || 'center'};

    background-color: #1A1A29;
    margin: ${props => props.margin || '128px 0 0 0'};
    padding: ${props => props.padding || '60px 136px 0'};
`
