import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/button/Button';
import { Icon } from '../../../components/icon/Icon';
import avatar from '../../../assets/images/avatar-edit.png'

export const Banner = () => {
    return (
        <StyledBanner>
            <StyledContainer>
                <StyledBannerInfo>
                    <StyledBannerInfoTitle>
                        <span style={{ fontSize: '32px' }}>Hello, i’m</span>
                        <span style={{ fontSize: '52px' }}>Jayjay D. Dinero</span>
                    </StyledBannerInfoTitle>
                    <p style={{ fontSize: '18px' }}>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>
                    <StyledButtonGroup>
                        <Button width='160px' height='48px' textValue={'About me'} iconId='buttonUser' iconViewBox='0 0 20 20' iconWidth='20px' iconHeight='20px' />
                        <Button width='160px' height='48px' textValue={'Projects'} iconId='buttonEye' iconViewBox='0 0 21 16' iconWidth='18px' iconHeight='16px' />
                    </StyledButtonGroup>
                </StyledBannerInfo>
                <StyledBannerimage>
                    <Icon iconId='elipse' width='486px' height='486px' viewBox='0 0 486 486' />
                    <Image src={avatar} alt="photo" />
                </StyledBannerimage>
            </StyledContainer>
        </StyledBanner>
    );
};


const StyledBanner = styled.section`
    width: 100%;
    background-color: #1A1A29;
    min-height: 30%;
    height: 561px;
    color: #fff;
    display: flex;
    justify-content: center;
`

const StyledContainer = styled.div`
    max-width: 100%;
    width: 1360px;
    display: flex;
    width: 1120px;
`

const StyledBannerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29px;
    min-width: 460px;
    padding-top: 209px;
    span {
        margin: 0;
        display: block;
    }
    p {
        margin: 0;
        max-width: 360px;
    }
`

const StyledBannerimage = styled.div`
        width: 100%;
        min-height: 100%;
        position: relative;
        overflow: hidden;

        svg {
            position: absolute;
            top: 205px;
            right: 0;
            z-index: 1;
        }
`

const StyledBannerInfoTitle = styled.h3`
    margin: 0;
`

const StyledButtonGroup = styled.div`
    display: flex;
    gap: 32px;
`

const Image = styled.img`
    width: 444px;
    height: 444px;
    /* object-fit: cover; */
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
`