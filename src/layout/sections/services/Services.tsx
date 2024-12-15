import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Title } from '../../../components/title/Title';
import styled from 'styled-components';
import { ServicesCard } from '../../../components/servicesCard/ServicesCard';

const cards = [
    {
        bordered: true,
        iconId: 'rulesAndPen',
        iconHeight: '56px',
        iconWidth: '56px',
        iconView: '0 0 56px 56px',
        title: 'UI & UX DESIGNING',
        text: 'I design beautiful web iterfaces with Figma and Adove XD'
    },
    {
        bordered: false,
        iconId: 'webDevelopment',
        iconHeight: '57px',
        iconWidth: '57px',
        iconView: '0 0 57px 57px',
        title: 'WEB DEVELOPMENT',
        text: 'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'
    },
    {
        bordered: true,
        iconId: 'mobileDevelopment',
        iconHeight: '70px',
        iconWidth: '70px',
        iconView: '0 0 70px 70px',
        title: 'MOBILE DEVELOPMENT',
        text: 'I am an expert mobile developer. I have experience using Flutter and React Native.'
    },
    {
        bordered: false,
        iconId: 'git',
        iconHeight: '62px',
        iconWidth: '62px',
        iconView: '0 0 62px 62px',
        title: 'VERSION CONTROL',
        text: 'I can use version control systems well, and Git & Mecurial are my go-to tool.'
    },
    {
        bordered: true,
        iconId: 'js',
        iconHeight: '54px',
        iconWidth: '54px',
        iconView: '0 0 54px 54px',
        title: 'NPM AND NODEJS',
        text: 'I have core understanding of NPM. I can also develop general purpose applications with NodeJS'
    },
    {
        bordered: false,
        iconId: 'webScraping',
        iconHeight: '48px',
        iconWidth: '48px',
        iconView: '0 0 48px 48px',
        title: 'WEB SCRAPING',
        text: 'I can collect content and data from the internet then manipulate and analyze as needed.'
    }
]

export const Services = () => {
    return (
        <StyledServices>
            <StyledContainer>
                <FlexWrapper width={'1120px'} direction={'column'} margin={'0'} alignItems={'left'} wrap='wrap' gap='32px'>
                    <Title title={'The services i offer:'} />
                    <FlexWrapper margin={'0'} wrap='wrap' padding={'0'} gap='22px'>
                        {cards.map(elem => (
                            <ServicesCard
                                bordered={elem.bordered}
                                iconId={elem.iconId}
                                iconHeight={elem.iconHeight}
                                iconWidth={elem.iconWidth}
                                iconView={elem.iconView}
                                title={elem.title}
                                text={elem.text}
                            />
                        ))}
                    </FlexWrapper>
                </FlexWrapper>
            </StyledContainer>
        </StyledServices>

    );
};

const StyledServices = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #1A1A29;
`

const StyledContainer = styled.div`
    max-width: 100%;
    width: 1360px;
    display: flex;
    justify-content: center;
    padding: 80px 0 0;
`