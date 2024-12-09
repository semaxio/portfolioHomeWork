import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const SocialContainer = () => {
    return (
        <StyledSocialContainer>
            <Icon iconId={'facebook'} height={'32px'} width={'32px'} viewBox={'0 0 32 32'}/>
            <Icon iconId={'instagram'} height={'32px'} width={'32px'} viewBox={'0 0 32 32'}/>
            <Icon iconId={'dribbble'} height={'32px'} width={'32px'} viewBox={'0 0 32 32'}/>
            <Icon iconId={'sms'} height={'32px'} width={'32px'} viewBox={'0 0 32 32'}/>
        </StyledSocialContainer>
    );
};

const StyledSocialContainer = styled.div`
    display: flex;
    gap: 16px;
`