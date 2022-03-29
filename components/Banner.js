import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import SwipSlider from './SwipSlider';
import Timer from './Timer';

const Banner = () => {
  return (
    <Container>
        <Header/>
        <Flex>
            <Texts>
                <Image src="https://res.cloudinary.com/ghazni/image/upload/v1648192609/nft-clone/soon_guab8h.png" alt="nft"/>
                <h1>Launching Soon</h1>
                <p>Bringing a Gangster and Rebellious NFT to Solana for everyone to start investing and be part of
                A bigger cause to help children all around the world ! </p>
                <h2>Launching Date </h2>
                <Timer/>
            </Texts>
            <Slider>
                <SwipSlider/>
            </Slider>
        </Flex>
    </Container>
  )
}

export default Banner;

const Container = styled.div`
    width: 100%;
    color: white;
    padding: 0 1rem;
    background: linear-gradient(rgba(0, 0, 0, 0.322), rgba(0, 0, 0, 0.288)), 
    url("https://res.cloudinary.com/ghazni/image/upload/v1648192617/nft-clone/banner_luwbde.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
    padding-bottom: 5rem;
    width: 90%;
    margin: 0 auto;
    @media(max-width : 880px){
        flex-direction: column;
    }
`
const Texts = styled.div`
    flex: 1;
    h1{
        font-family: 'Nunito', sans-serif;
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
        margin-top: -0.8rem;
        @media(max-width : 570px){
            font-size: 3rem;
            padding: 0.5rem 0;
        }
        @media(max-width : 480px){
            font-size: 2.5rem;
        }
        @media(max-width : 415px){
            font-size: 2rem;
            font-weight: 900;
        }
    }
    p{
        width: 29rem;
    @media(max-width : 880px){
        width: 100%;
    }
    @media(max-width : 570px){
            width : 90%;
    }
    }
    h2{
        font-family: 'Poppins', sans-serif;
        color: #F12D5E;
        padding: 1rem 0;
    }
`
const Image = styled.img`
    width: 19rem;
    @media(max-width : 570px){
        width: 16rem;
    }
    @media(max-width : 480px){
        width: 13rem;
    }
`
const Slider = styled.div`
    flex: 1;
    margin-top: 3.4rem;
`