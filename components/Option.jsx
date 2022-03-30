import React from 'react'
import { Fade, Flip, Slide, Zoom } from 'react-reveal';
import styled from 'styled-components';

const Option = () => {
  return (
    <Container>
        <div className='shadow'></div>
        <Fade>
            <Planet src={"https://res.cloudinary.com/ghazni/image/upload/v1648192606/nft-clone/option-earth_e9ayjx.png"}alt="earth"/>
        </Fade>
        <Fade>
        <Space className='option__space'
        src={"https://res.cloudinary.com/ghazni/image/upload/v1648192605/nft-clone/option-space_pftz0o.png"}alt="space"/>
        </Fade>
        <Content>
            <Texts>
                <Flip bottom>
                    <h1>Options for our Utility</h1>
                </Flip>
                <Slide>
                <Fade bottom>
                    <h3>Our Holders will vote on one of the following utilities once we mint out.</h3>
                </Fade>
                <Fade bottom>
                <ol>
                    <li>Collectively own and fractionalize Metaverse land or popular high priced NFTs. </li>
                    <li>Implementing more marketing with floor sweep to raise the floor price and lower quantity. </li>
                    <li>Starting a new NFT project and giving rewards to holders of the original Gangsterbaby NFT. </li>
                </ol>
                </Fade>
                </Slide>
            </Texts>
            <Photo>
                <Zoom>
                    <Img src="https://res.cloudinary.com/ghazni/image/upload/v1648192604/nft-clone/option-img_bbnzox.png" alt="banner"/>
                </Zoom>
            </Photo>
        </Content>
    </Container>
  )
}

export default Option;

const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.700), rgba(0, 0, 0, 0.500)), 
    url("https://res.cloudinary.com/ghazni/image/upload/v1648192604/nft-clone/option_yn8far.png");
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .shadow{
    position: absolute;
    height: 60px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0));
    width: 100%;
    top: -2rem;
    }
`
const Planet = styled.img`
  position: absolute;
  left: 0;
  width: 7rem;
  top: -6rem;
  @media(max-width : 975px){
    width: 5rem;
    top: -3rem;
}
  @media(max-width : 590px){
    width: 4rem;
    top: -2.5rem;
}
`
const Space = styled.img`
  position: absolute;
  right: 2rem;
    width: 10rem;
    top: -2rem;
@media(max-width : 975px){
    width: 7rem;
    top: -2rem;
}
@media(max-width : 590px){
    width: 5rem;
    top: 0;
}
`
const Content = styled.div`
    padding: 4rem 2rem 8rem 4rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width : 975px){
        flex-direction: column;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        padding: 5rem 0 2rem 0;
        gap: 2rem;
    }
`
const Texts = styled.div`
    flex: 1;
    h1{
        font-family: 'Nunito', sans-serif;
        font-weight: 900;
        font-size: 2.8rem;
        text-transform: uppercase;
        color: #F12D5E;
        @media(max-width : 1135px){
            font-size: 2.5rem;
        }
        @media(max-width : 650px){
            font-size: 2rem;
        }
    }
    h3{
        font-family: 'Poppins', sans-serif;
        padding: 1rem 0;
        width: 70%;
        @media(max-width : 1107px){
           width: 90%;
        }
        @media(max-width : 650px){
            font-size: 1rem;
        }
    }
    ol{
        padding-left: 1rem;
    }
    ol li{
        width: 70%;
        line-height: 1.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        @media(max-width : 975px){
            width: 100%;
        }
        @media(max-width : 650px){
            font-size: 0.9rem;
        }
    }
`
const Photo = styled.div`
    @media(max-width : 975px){
        text-align: center;
    }
`
const Img = styled.img`
    width: 26rem;
    @media(max-width : 1067px){
        width: 23rem;
    }
    @media(max-width : 1015px){
        width: 20rem;
    }
    @media(max-width : 975px){
        width: 70%;
    }
`