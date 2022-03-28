import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <div className="shadow"></div>
        <Logo>
            <Image src="https://res.cloudinary.com/ghazni/image/upload/v1648192602/nft-clone/foot-logo_v44owi.png"alt="logo"/>
        </Logo>
        <Foot>
            <h1>© Copyright GBaby 2022. ALL RIGHT RESERVED</h1>
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
    }
`
const Logo = styled.div`
    border-bottom: 1px solid #fff;
    width: 60%;
    text-align: center;
    padding-bottom: 0.5rem;
`
const Image = styled.img`
    width: 16rem;
`
const Foot = styled.div`
    h1{
        font-size: 1rem;
        padding: 0.8rem 0;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    };
`