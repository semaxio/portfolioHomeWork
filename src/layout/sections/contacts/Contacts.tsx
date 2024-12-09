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
        <FlexWrapper margin={'0'} padding={'28px 136px 258px'}>
            <StyledContacts>
                <StyledSocial>
                    <Title title={'Connect with me:'} />
                    <StyledP>Satisfied with me? Please contact me</StyledP>
                    <SocialContainer />
                </StyledSocial>
                <StyledFormContainer>
                    <StyledSpan>Contact me, let’s make magic together</StyledSpan>
                    <StyledForm>
                        <Input type="text" placeholder={'Name:'} height={'62px'}/>
                        <Input type="text" placeholder={'Email:'} height={'62px'} />
                        <Input type="textarea" placeholder={'Message:'} />
                        <Button width={'174px'} height={'50px'} textValue={'Send'} bgColor={'#7562E0'} scale={'1.1'} />
                    </StyledForm>
                </StyledFormContainer>
            </StyledContacts>
        </FlexWrapper>
    );
};

const StyledContacts = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const StyledSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const StyledP = styled.p`
margin: 0;
    font-size: 18px;
    color: #fff;
`

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 100px;
`
const StyledSpan = styled.span`
    color: #fff;
    font-size: 24px;
    margin-bottom: 24px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
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