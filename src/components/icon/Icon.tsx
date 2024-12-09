import React from 'react';
import sprite from './../../assets/sprite/sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "486"} height={props.height || "486"} viewBox={props.viewBox || "0 0 486 486"} >
            <use xlinkHref={`${sprite}#${props.iconId}`} />
        </svg>
    );
};

