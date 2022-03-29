import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import styled from "styled-components";

export default function SwipSlider() {
  return (
    <Container>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad55b5129002333.6161ca5983d3b.jpg"
          alt="corton"/>
          <Flex>
            <h2>Gbaby NFT’s</h2>
            <p><span>On Sale:</span> Now</p>
          </Flex>
          <SecondFlex>
            <Counter>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </Counter>
            <button className="now">MINT NOW</button>
          </SecondFlex>
          <Foot>
          <h3>Available for limited time and quantity!</h3>
          </Foot>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad55b5129002333.6161ca5983d3b.jpg"
          alt="corton"/>
          <Flex>
            <h2>Gbaby NFT’s</h2>
            <p><span>On Sale:</span> Now</p>
          </Flex>
          <SecondFlex>
            <Counter>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </Counter>
            <button className="now">MINT NOW</button>
          </SecondFlex>
          <Foot>
          <h3>Available for limited time and quantity!</h3>
          </Foot>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad55b5129002333.6161ca5983d3b.jpg"
          alt="corton"/>
          <Flex>
            <h2>Gbaby NFT’s</h2>
            <p><span>On Sale:</span> Now</p>
          </Flex>
          <SecondFlex>
            <Counter>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </Counter>
            <button className="now">MINT NOW</button>
          </SecondFlex>
          <Foot>
          <h3>Available for limited time and quantity!</h3>
          </Foot>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
.swiper {
  width: 300px;
  height: 400px;
  @media(max-width : 430px){
    width: 260px;
    height: 370px;
    margin-right: 3rem;
  }
  @media(max-width : 390px){
    width: 240px;
    height: 340px;
    margin-right: 3rem;
  }
  @media(max-width : 360px){
    margin-right: 2rem;
  }
}

.swiper-slide {
  border-radius: 10px 10px 0px 0px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  padding: 0.7rem;
  background-color: black;
}
`
const Image = styled.img`
  width: 100%;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2{
    font-size: 0.9rem;
    font-weight: 600;
  }
  p{
    font-size: 0.8rem;
    font-weight: 600;
    span{
      color: #F12D5E;
    }
  }
  h3{
    font-size: 0.9rem;
  }
`
const SecondFlex = styled(Flex)`
  .now{
    background-color: #F12D5E;
    color: white;
    border : none;
    padding: 0.4rem 0.5rem;
    font-size: 0.7rem;
    border-radius: 4px;
    cursor: pointer;
  }
`
const Counter = styled(Flex)`
  border: 1px solid rgba(255, 255, 255, 0.473);;
  width: 5rem;
  height: 1.8rem;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  border-radius: 5px;
  button{
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.800);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 100;
    :last-child{
      font-size : 0.9rem;
      padding-top: 0.2rem;
    }
  }
  span{
    font-size: 0.8rem;
  }
`

const Foot = styled.div`
  text-align: center;
  h3{
    font-size: 0.8rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.600);
    padding: 0.2rem 0 1rem 0;
  }
`
