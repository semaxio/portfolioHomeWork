import styled from 'styled-components'

type FlexWrapperType = {
    justify?: string
    direction?: string
    wrap?: string
    gap?: string
    alignItems?: string
    margin?: string
    padding?: string
    width?: string | null
    height?: string
    maxWidth?: string
    maxHeight?: string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
    width: ${props => {
        if (props.width === null) return null
        return props.width || '100%'
    }
    };
    height: ${props => props.height || null};
    max-width: ${props => props.width || null};
    max-height: ${props => props.height || null};
    display: flex;
    justify-content: ${props => props.justify || null};
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    align-items: ${props => props.alignItems || 'center'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
`
