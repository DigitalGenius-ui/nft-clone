import React from 'react'
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoGameControllerB } from 'react-icons/io'
import { Flip, Zoom } from 'react-reveal';

const Social = () => {
  return (
    <Container>
      <Media>
        <Flip>
          <h1>Join our community</h1>
        </Flip>
          <Icons>
            <Zoom>
            <div><AiOutlineInstagram/></div>
            </Zoom>
            <Zoom>
            <div><IoLogoGameControllerB/></div>
            </Zoom>
            <Zoom><div><AiOutlineTwitter/></div></Zoom>
          </Icons>
      </Media>
        <Zoom>
          <Imag src="https://res.cloudinary.com/ghazni/image/upload/v1648192603/nft-clone/join_jvhmwn.png" alt="foto"/>
        </Zoom>
    </Container>
  )
}

export default Social;

const Container = styled.div`
  background: linear-gradient(#000000, #f12d5e75, #000000);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  position: relative;
  height: 400px;
  @media(max-width : 950px){
    padding: 4rem 2rem;
  }
  @media(max-width : 620px){
      flex-direction: column;
  }
`
const Media = styled.div`
  h1{
    padding-bottom: 2rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    @media(max-width : 730px){
      font-size: 1.7rem;
    }
    @media(max-width : 620px){
     padding-bottom: 1rem ;
    }
    @media(max-width : 390px){
      font-size: 1.5rem;
    }
  }

`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media(max-width : 620px){
    justify-content: center;
    width: 100%;
    padding-bottom: 1rem;
  }
  div{
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
    box-shadow: 0px 0px 0px 1px #fff;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
const Imag = styled.img`
  width: 19rem;
  @media(max-width : 950px){
    width: 17rem;
  }
  @media(max-width : 730px){
    width: 15rem;
  }
`