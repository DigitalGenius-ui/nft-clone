import React from 'react'
import { Bounce, Zoom } from 'react-reveal';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <div className="shadow"></div>
        <Logo>
            <Zoom>
                <Image src="https://res.cloudinary.com/ghazni/image/upload/v1648192602/nft-clone/foot-logo_v44owi.png"alt="logo"/>
            </Zoom>
        </Logo>
        <Foot>
            <Bounce left>
                <h1>© Copyright GBaby 2022. ALL RIGHT RESERVED</h1>
            </Bounce>
        </Foot>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0 0 0;
    position: relative;
    .shadow{
        width: 100%;
        height: 100px;
        background: linear-gradient(rgb(0,0,0,0), #000, rgb(0,0,0,0));
        position: absolute;
        top: -5rem;
        @media(max-width : 620px){
            top: -1.5rem;
        }
    }
    @media(max-width : 620px){
        padding-top: 5rem ;
    }
`
const Logo = styled.div`
    border-bottom: 1px solid #fff;
    width: 60%;
    text-align: center;
    padding-bottom: 0.5rem;
    @media(max-width : 680px){
        width: 80%;
    }
`
const Image = styled.img`
    width: 16rem;
    @media(max-width : 680px){
        width: 13rem;
    }
    @media(max-width : 630px){
        width: 10rem;
    }
`
const Foot = styled.div`
    h1{
        font-size: 1rem;
        padding: 0.8rem 0;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        @media(max-width : 680px){
            font-size: 0.8rem;
        }
        @media(max-width : 430px){
            font-size: 0.7rem;
        }
    };
`