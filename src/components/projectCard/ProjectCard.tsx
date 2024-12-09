import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Button } from '../button/Button';

type ProjectCardPropsType = {
    src: string
    title: string
    text: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            <Image src={props.src} />
            <StyledTitle>{props.title}</StyledTitle>
            <StyledP>{props.text}</StyledP>
            <StyledButtonSection>
                <Button scale={'1.1'} width={'145px'} height={'43px'} textValue={'View Live'} bgColor={'#7562E0'} />
                <Button scale={'1.1'} width={'145px'} height={'43px'} textValue={'Github Repo'} />
            </StyledButtonSection>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
    width: 343px;
    height: 417px;
    background-color: #31313F;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    padding: 16px;
`

const Image = styled.img`
    width: 311px;
    height: 173px;
    object-fit: cover;
    opacity: 0.5;
`

const StyledTitle = styled.p`
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #7562E0;
`

const StyledP = styled.p`
    margin: 0;
    color: #fff;
    font-size: 18px;
    max-width: 270px;
`

const StyledButtonSection = styled.div`
    display: flex;
    gap: 18px;
`