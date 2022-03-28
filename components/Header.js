import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
        <Logo>
            <Image src="https://res.cloudinary.com/ghazni/image/upload/v1648192603/nft-clone/logo_gid5bs.png" alt="logo"/>
            <h1>GBaby NFT’s</h1>
        </Logo>
        <Nav>
            <span>FAQ</span>
            <span>ROADMAP</span>
            <span>Connect</span>
        </Nav>
    </Container>
  )
}

export default Header;

const Logo = styled.div`
    display: flex;
    align-items: center;
    h1{
        font-size: 0.8rem;
        font-weight: 500;
        border-left: 1px solid #fff;
        margin-left: 2rem;
        padding: 0.5rem 1rem;
    }
`
const Container = styled(Logo)`
    justify-content: space-between;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.185);
    width: 90%;
    margin: 0 auto;
`
const Image = styled.img`
    width: 5rem;
`
const Nav = styled(Logo)`
    span{
        font-size: 0.8rem;
        margin-left: 1rem;
        text-transform: uppercase;
        cursor : pointer;
        padding: 0.4rem 0.6rem 0.3rem 0.6rem;
        border-radius: 3px;
        transition: 400ms ease-in-out;
        font-family: "Ubunt", sans-serif;
        font-weight: 100;
        :hover{
            background-color: #F12D5E;
        }
    }
`