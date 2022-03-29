import React, {useState} from 'react'
import styled from 'styled-components';

const Header = () => {
    const [open, setOpen] = useState(false);
  return (
    <Container open={open}>
        <Logo>
            <Image src="https://res.cloudinary.com/ghazni/image/upload/v1648192603/nft-clone/logo_gid5bs.png" alt="logo"/>
            <h1>GBaby NFT’s</h1>
        </Logo>
        <Nav open={open}>
            <span>FAQ</span>
            <span>ROADMAP</span>
            <span>Connect</span>
        </Nav>
        <Bar open={open} onClick={() => setOpen(!open)}>
            <div className="line"></div>
        </Bar>
        <div className="background"></div>
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
    position: relative;
    .background{
        position: fixed;
        top : 0;
        right : 0;
        left : 0;
        bottom : 0;
        background-color: #00000068;
        z-index: 100;
        display: ${props => props.open ? "inline" : "none"};
    }
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
    @media(max-width : 620px){
        position: absolute;
        top : 60px;
        right: 0;
        left: 0;
        background-color: #F12D5E;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        border-radius: 5px;
        height: ${props => props.open ? "6rem" : "0"};
        transition: 400ms ease-in-out;
        z-index: 10000;
        overflow: hidden;
    }
`
const Bar = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    display: none;
    z-index: 10000;
    @media(max-width : 620px){
        display: flex;
    }
    .line{
        width: 25px;
        height: 2px;
        background-color: ${props => props.open ? "transparent" : "#fff"};
        transition: 400ms ease-in-out;
        ::before, ::after{
            content: '';
            width: 25px;
            height: 2px;
            background-color: #fff;
            position: absolute;
        }
        ::before{
            transform: ${props => props.open ? "rotate(45deg)" : "translateY(7px)"};
            transition: 400ms ease-in-out;
        }
        ::after{
            transform: ${props => props.open ? "rotate(-45deg)" : "translateY(-7px)"};
            transition: 400ms ease-in-out;
        }
    }
`