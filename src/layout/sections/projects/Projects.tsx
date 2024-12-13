import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Title } from '../../../components/title/Title';
import { ProjectCard } from '../../../components/projectCard/ProjectCard';

import map from './../../../assets/images/map-edit.jpg'
import live from './../../../assets/images/live-edit.jpg'
import car from './../../../assets/images/car-edit.jpg'


const cards = [
    {
        src: map,
        title: 'TWINDER',
        text: 'A live Geolocation app for finding tweets and twitter users around you.'
    },
    {
        src: live,
        title: 'LIVENTS',
        text: 'A video streaming app with live Geolocation, for streaming events.'
    },
    {
        src: car,
        title: 'MOOVE',
        text: 'Mobile app for booking instant pickup & dropoff accross major cities.'
    }
]

export const Projects = () => {
    return (
        <FlexWrapper margin={'0'} gap={'36px'} padding={'60px 136px 100px'}>
            <StyledProjects>
                <Title title={'Featured projects:'} />
                <StyledP>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</StyledP>
                <FlexWrapper wrap='wrap' margin={'0'} padding={'36px 0 0 0'} gap={'17px'}>
                    {
                        cards.map(elem => (
                            <ProjectCard src={elem.src} title={elem.title} text={elem.text}/>
                        ))
                    }
                </FlexWrapper>
            </StyledProjects>
        </FlexWrapper>

    );
};


const StyledProjects = styled.div`
    
`

const StyledP = styled.p`
    color: #fff;
    font-size: 18px;
    max-width: 900px;
`