import Image from 'next/image';
import { Flip } from 'react-reveal';
import styled from 'styled-components';

const Community = () => {
  return (
    <Container>
      <div className='shadow'></div>
      <Img src={"https://res.cloudinary.com/ghazni/image/upload/v1648192602/nft-clone/banner-world_rh07oz.png"}alt="earth"/></Fade>
      <Img className='community__cloud'
      src={"https://res.cloudinary.com/ghazni/image/upload/v1648192610/nft-clone/water_gdcpjw.png"}alt="cloud"/></Fade>
      <Content>
        <Flip>
          <h1><span>GBaby</span> Community Benefits </h1>
        </Flip>
        <Fade bottom>
        <Carts>
          <Cart>
            <Sign>
              <Imag 
              src="https://res.cloudinary.com/ghazni/image/upload/v1648192755/nft-clone/boxes/first_nt8n4t.png"
              alt="boximg"/>
            </Sign>
            <p>Be one the first to own a Solana fist-generation GBaby NFT’s.</p>
          </Cart>
          <Cart>
            <Sign>
              <Imag 
              src="https://res.cloudinary.com/ghazni/image/upload/v1648192755/nft-clone/boxes/second_hy4i0j.png"
              alt="boximg"/>
            </Sign>
            <p>Each NFT is unique to you, some rarer then others.</p>
          </Cart>
          <Cart>
            <Sign>
              <Imag 
              src="https://res.cloudinary.com/ghazni/image/upload/v1648192755/nft-clone/boxes/third_krkfbd.png"
              alt="boximg"/>
            </Sign>
            <p>Activity contest on discord once mint out for members only to win cash prizes.</p>
          </Cart>
          <Cart>
            <Sign>
              <Imag 
              src="https://res.cloudinary.com/ghazni/image/upload/v1648192755/nft-clone/boxes/fourth_scqvdt.png"
              alt="boximg"/>
            </Sign>
            <p>Participate via voting system to help children in need, at least 60 SOL in donation.</p>
          </Cart>
          <Cart>
            <Sign>
              <Imag 
              src="https://res.cloudinary.com/ghazni/image/upload/v1648192755/nft-clone/boxes/fifth_wezbki.png"
              alt="boximg"/>
            </Sign>
            <p>Funds will be used to further development Community.</p>
          </Cart>
          <Cart>
            <Sign>
              <Imag 
              src="https://res.cloudinary.com/ghazni/image/upload/v1648192755/nft-clone/boxes/sixth_itaivy.png"
              alt="boximg"/>
            </Sign>
            <p>Voting rights for our project utility.</p>
          </Cart>
        </Carts>
        </Fade>
      </Content>
    </Container>
  )
}

export default Community;
const Container = styled.div`
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.450), rgba(0, 0, 0, 0.450)), 
  url("https://res.cloudinary.com/ghazni/image/upload/v1648192616/nft-clone/s-banner_ngvpwe.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 0 5rem 0;
  position: relative;
  .shadow{
    position: absolute;
    height: 60px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0));
    width: 100%;
    top: -2rem;
  }
  .community__cloud{
    left: 2rem;
    width: 11rem;
    top: -5rem;
    @media(max-width : 950px){
    width: 9rem;
    left: 0;
    }
    @media(max-width : 415px){
    width: 8rem;
    left: 0;
    }
  }
  
`
const Img = styled.img`
  position: absolute;
  right: 0;
  width: 9rem;
  top: -4rem;
  @media(max-width : 950px){
    width: 6rem;
  }
  @media(max-width : 415px){
    width: 5rem;
    }
`
const Content = styled.div`
  width: 75%;
  margin: 0 auto;
  @media(max-width : 985px){
    width: 85%;
  }
  h1{
    font-family: 'Nunito', sans-serif;
    text-align: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
    @media(max-width : 390px){
    font-size: 1.5rem;
    }
    span{
      color: #F12D5E;
    }
  }
`
const Carts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
`
const Cart = styled.div`
  background-color: #111;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  p{
    text-align: center;
    font-size: 1rem;
  }
`
const Sign = styled.div`
  background: linear-gradient(#F12D5E, #F12D5E);
  padding: 0.5rem;
  border-radius: 50px;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Imag = styled.img`
  width: 2rem;
`
