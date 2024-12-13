import React from 'react';
import styled from 'styled-components';
import { Title } from '../../../components/title/Title';
import { Icon } from '../../../components/icon/Icon';
import { AboutCard } from '../../../components/aboutCard/AboutCard';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const About = () => {
    return (
        <FlexWrapper direction={'column'} gap={'25px'} alignItems={'left'}>
                <Title title={'About me:'}/>
                <StypedP>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles.
                    Here are the major skiills i have. </StypedP>
                <FlexWrapper margin={'0'} padding={'0'} gap={'22px'}>
                    <Icon iconId='fivePlus' width="112" height="71" viewBox="0 0 112 71" />
                    <StyledSpan>Years of experience. Specialised in building apps, while ensuring a seamless
                        web experience for end users.</StyledSpan>
                </FlexWrapper>
                <FlexWrapper wrap='wrap' padding={'58px 0'} margin={'0'} gap={'17px'}>
                    <AboutCard iconId={'rulesAndPen'} width='42px' height='42px' viewBox="0 0 42 42" text={'UI & UX DESIGNING'} />
                    <AboutCard iconId={'webDevelopment'} width="57" height="57" viewBox="0 0 57 57" text={'WEB DEVELOPMENT'} />
                    <AboutCard iconId={'mobileDevelopment'} width="62" height="62" viewBox="0 0 62 62" text={'MOBILE DEVELOPMENT'} />
                    <AboutCard iconId={'pyhton'} width="55" height="55" viewBox="0 0 55 55" text={'WEB SCRAPING WITH PYTHON'} />
                </FlexWrapper>
        </FlexWrapper>


    );
};

const StypedP = styled.p`
    margin: 0;
    font-size: 18px;
    color: #fff;
    max-width: 900px;
`

const StyledSpan = styled.span`
    font-size: 24px;
    color: #fff;
    max-width: 800px;
`
