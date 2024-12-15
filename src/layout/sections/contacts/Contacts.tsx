import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Title } from '../../../components/title/Title';
import { Button } from '../../../components/button/Button';
import { SocialContainer } from '../../../components/socialContainer/SocialContainer';

type InputType = {
    placeholder?: string
    type: string
    height?: string
}

export const Contacts = () => {

    return (
        <StyledContacts id="contact">
            <StyledContainer>
                <FlexWrapper width={'1120px'} wrap='wrap' margin={'0'} alignItems={'start'} gap={'250px'}>
                    <StyledSocial>
                        <Title title={'Connect with me:'} />
                        <StyledP>Satisfied with me? Please contact me</StyledP>
                        <SocialContainer />
                    </StyledSocial>
                    <StyledFormContainer>
                            <StyledSpan>Contact me, let’s make magic together</StyledSpan>
                            <Input type="text" placeholder={'Name:'} height={'62px'} />
                            <Input type="text" placeholder={'Email:'} height={'62px'} />
                            <Input type="textarea" placeholder={'Message:'} />
                            <Button width={'174px'} height={'50px'} textValue={'Send'} bgColor={'#7562E0'} scale={'1.1'} />
                    </StyledFormContainer>
                </FlexWrapper>
            </StyledContainer>
        </StyledContacts>

    );
};

const StyledContacts = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #1A1A29;
`

const StyledContainer = styled.div`
    padding: 128px 0 258px;
    width: 1360px;
    max-width: 100%;
    display: flex;
    justify-content: center;
`


const StyledSocial = styled.div`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 24px;
`

const StyledP = styled.p`
    margin: 0;
    font-size: 18px;
    color: #fff;
`

const StyledFormContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
`
const StyledSpan = styled.span`
    color: #fff;
    font-size: 24px;
    margin-bottom: 0;
`

const Input = styled.input<InputType>`
    width: 472px;
    height: ${props => props.height || '98px'};
    border-radius: 8px;
    background-color: #31313F;

    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    padding-left: 16px;
`