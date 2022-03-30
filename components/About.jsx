import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import Tada from 'react-reveal/Tada';
import LightSpeed from 'react-reveal/LightSpeed';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
        <div className='shadow'></div>
        <Fade><Img src={"https://res.cloudinary.com/ghazni/image/upload/v1648192601/nft-clone/fire_umu0ut.png"}alt="earth"/></Fade>
        <Fade>
        <Img className='stone__planet'
        src={"https://res.cloudinary.com/ghazni/image/upload/v1648192603/nft-clone/moon_dvuycy.png"}alt="stone-planet"/>
        </Fade>
        <Cotents>
                <Texts>
                    <Zoom>
                        <h1>About The GBaby</h1>
                    </Zoom>
                <Fade left>
                    <p>The Gaby project was initiated in the last quarter of 2021 as we experienced a tremendous support towards the 
                        project with a vision of helping children in need around the world.The collection 
                        is a hand drawn and algorithmically minted digital piece of art. 
                        The GBaby NFTs are powered and stored on the Solana blockchain forever. 
                        There is only room for 3,333 unique Solana Baby Gagsters.
                    </p>
                    <p>When you mint a GBaby NFT, you’re not just buying an avatar or a rare piece of digital art. 
                        You are enrolling to special cash prizes in Solana and supporting Children in need of help around the world. 
                        Your GBaby can serve as your digital identity, and open digital doors for you in the Solana 
                        Metaverse that can increase over time.
                    </p>
                </Fade>
                    <LightSpeed>
                        <button>Price 0.25 SOL</button>
                    </LightSpeed>
                    <LightSpeed>
                        <button>Amount 3333</button>
                    </LightSpeed>
                </Texts>
            <Tada>
                <Imag src="https://res.cloudinary.com/ghazni/image/upload/v1648192602/nft-clone/about_m23r6w.png"
                alt="foto"/>
            </Tada>
        </Cotents>
    </Container>
  )
}

export default About;

const Container = styled.div`
    position: relative;
    .shadow{
    position: absolute;
    height: 60px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0));
    width: 100%;
    top: -2rem;
  }
  .stone__planet{
    left: 0;
    width: 7rem;
    top: -6rem;
  }
`
const Img = styled.img`
  position: absolute;
  right: 0;
  width: 14rem;
  top: -4rem;
  @media(max-width : 650px){
        width: 10rem;
    }
`

const Cotents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 0rem 4rem 4rem ;
    @media(max-width : 880px){
        flex-direction: column;
    }
    @media(max-width : 880px){
        padding: 3rem 0;
        width: 90%;
        margin: 0 auto;
    }
`
const Texts = styled.div`
    h1{
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 2.7rem;
        @media(max-width : 460px){
            font-size: 2.2rem;
        }
    }
    p{
        margin: 1rem 0;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
    }
    button{
        background-color: transparent;
        color: #F12D5E;
        border: none;
        box-shadow: 0px 0px 0px 1px #F12D5E;
        padding: 0.6rem 1rem;
        margin-right: 1rem;
        border-radius: 3px;
        cursor: pointer;
        transition: 300ms ease-in-out;
        :hover{
            background-color: #f12d5e59;
            color: white;
        }
    }
`
const Imag = styled.img`
    width: 34rem;
    @media(max-width : 1020px){
        width: 30rem;
    }
    @media(max-width : 940px){
        width: 28rem;
    }
    @media(max-width : 880px){
        width: 34rem;
    }
    @media(max-width : 612px){
        width: 100%;
    }
`