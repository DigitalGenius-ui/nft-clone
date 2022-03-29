/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper";

export default function Nft() {
  return (
    <Container>
      <div className='shadow'></div>
      <Image 
      src="https://res.cloudinary.com/ghazni/image/upload/v1648192610/nft-clone/slider-fire_dnqj8x.png" alt="fire"/>
    <Texts>
        <h1>NFT's</h1>
        <p>3333 unique nfts will be available upon launch using solana network. The price will be 0.25 SOL per NFT on launch.</p>
    </Texts>
      <Slider>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop = {true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Imag src="https://res.cloudinary.com/ghazni/image/upload/v1648192609/nft-clone/slide1_txnns7.png" alt="slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <Imag src="https://res.cloudinary.com/ghazni/image/upload/v1648192609/nft-clone/slide1_txnns7.png" alt="slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <Imag src="https://res.cloudinary.com/ghazni/image/upload/v1648192609/nft-clone/slide1_txnns7.png" alt="slider"/>
        </SwiperSlide>
      </Swiper>
      </Slider>
      <button>MINT NOW</button>
    </Container>
  );
}

const Container = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.450), rgba(0, 0, 0, 0.450)), 
url("https://res.cloudinary.com/ghazni/image/upload/v1648192609/nft-clone/slider-bg_kvyhul.png");
width: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
padding: 4rem 0;
text-align: center;
.shadow{
position: absolute;
height: 60px;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0));
width: 100%;
top: -2rem;
}
.swiper {
  width: 75%;
  padding-top: 50px;
  padding-bottom: 50px;
  @media(max-width : 490px){
    width: 100%;
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-3d .swiper-slide-shadow-left, 
.swiper-slide-shadow-right{
    background-image: none;
}
.swiper-button-next {
  background-image: url("https://res.cloudinary.com/ghazni/image/upload/v1648207430/nft-clone/rightarrow_qrugnn.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  @media(max-width : 800px){
    display: none;
  }
}
.swiper-button-prev {
  background-image: url("https://res.cloudinary.com/ghazni/image/upload/v1648207429/nft-clone/leftarrow_jcih09.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  @media(max-width : 800px){
    display: none;
  }
}
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

button{
    margin-top: 2rem;
    background-color: transparent;
    color: #F12D5E;
    border: none;
    box-shadow: 0px 0px 0px 1px #F12D5E;
    padding: 0.6rem 2rem;
    margin-right: 1rem;
    border-radius: 3px;
    cursor: pointer;
    transition: 300ms ease-in-out;
    font-size: 0.7rem;
    :hover{
        background-color: #f12d5e59;
        color: white;
    }
  }

`
const Slider = styled.div`
  /* width: 55rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden; */
`
const Texts = styled.div`
text-align: center;
  h1{
    text-align: center;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    letter-spacing: 0.1rem;
    font-size: 2.5rem;
    color: #F12D5E;
  }
  p{
    width: 45rem;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    padding: 0.5rem 0;
    @media(max-width : 760px){
      width: 90%;
    }
  }
`
const Imag = styled.img`
    width: 80%;
`
const Image = styled.img`
  position: absolute;
  left: 0;
  width: 13rem;
  top: -4rem;
  @media(max-width : 1130px){
    width: 10rem;
  }
  @media(max-width : 890px){
    width: 8rem;
  }
  @media(max-width : 430px){
    width: 6rem;
    top: -2rem;
  }
`