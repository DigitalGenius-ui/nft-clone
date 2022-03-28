import React from 'react'
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoGameControllerB } from 'react-icons/io'

const Social = () => {
  return (
    <Container>
      <Media>
        <h1>Join our community</h1>
          <Icons>
            <div><AiOutlineInstagram/></div>
            <div><IoLogoGameControllerB/></div>
            <div><AiOutlineTwitter/></div>
          </Icons>
      </Media>
        <Imag src="https://res.cloudinary.com/ghazni/image/upload/v1648192603/nft-clone/join_jvhmwn.png" alt="foto"/>
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
`
const Media = styled.div`
  h1{
    padding-bottom: 2rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
  }

`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
`