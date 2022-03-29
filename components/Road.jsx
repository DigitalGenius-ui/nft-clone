import React from 'react'
import styled from 'styled-components';

const Road = () => {
  return (
    <Container>
        <div className='shadow'></div>
        <Img 
        className='road__planet'
        src={"https://res.cloudinary.com/ghazni/image/upload/v1648192605/nft-clone/road-stone_pggacl.png"}alt="stone"/>
        <Img src={"https://res.cloudinary.com/ghazni/image/upload/v1648192605/nft-clone/road-moon_ild4r4.png"}alt="road-planet"/>
        <Stone src="https://res.cloudinary.com/ghazni/image/upload/v1648192607/nft-clone/road-stone2_qbkivt.png" alt="stone"/>
        <h1>ROAD MAP</h1>
            <RoadMap>
                <Image 
                src="https://res.cloudinary.com/ghazni/image/upload/v1648192604/nft-clone/road-line_xsudkk.png" 
                alt="road"/>
                <div>
                    <p> Work with our artists to get 
                    GangsterBaby collection out</p>
                </div>
                <div>
                <p>Website, Discord and 
                community growth</p>
                </div>
                <div>
                    <p>GangsterBaby Marketing, Community engagement, voting and collaborations</p>
                </div>
            <ul className='list'>
                <li> Launch Mint</li>
                <li>After mint Create holder chat on discord to help holders vote on direction</li>
            </ul>
            <ul className='list2'>
                <li>A chance to get free Airdrop on our next collection.</li>
                <li>Implement Ideas from holders. </li>
                <li>Giveaway at least 60 Sol in donations to a charity of choice (Through Vote).</li>
                <li>Fun contests on Discord to win cash prizes.</li>
            </ul>
            </RoadMap>
    </Container>
  )
}

export default Road;

const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.500)), 
    url("https://res.cloudinary.com/ghazni/image/upload/v1648192607/nft-clone/road-map_psazu8.png");
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    padding-top: 3rem;
    padding-bottom: 8rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Nunito', sans-serif;
        font-weight: 900;
        color: #F12D5E;
    }
    .shadow{
    position: absolute;
    height: 60px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0));
    width: 100%;
    top: -2rem;
  }
  .road__planet{
    left: 0;
    width: 6rem;
    top: -4rem;
    @media(max-width : 820px){
    width: 4rem;
    }
  }
`
const RoadMap = styled.div`
    position: relative;
    @media(max-width : 620px){
        width: 30%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
    }
    @media(max-width : 564px){
        width: 35%;
    }
    @media(max-width : 485px){
        width: 40%;
    }
    div{
        width: 13rem;
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 0.153);
        border-radius: 5px;
        position: absolute;
        font-weight: 400;
        font-size: 0.9rem;
        font-family: "Ubuntu" sans-serif;
        padding: 0.5rem 1rem;
        @media(max-width : 800px){
            font-size: 0.8rem;
        }
        @media(max-width : 620px){
            font-size: 0.7rem;
        }
        @media(max-width : 485px){
            font-size: 0.6rem;
            padding: 0.5rem 0.5rem;
        }
        :nth-child(2){
            top: 2rem;
            right:-10rem;
            box-shadow: 0px 0px 0px 1px #FE9700;
            color: #FE9700;
            text-align: center;
            width: 13.5rem;
            @media(max-width : 620px){
                right:-6rem;
                width: 11rem;
            }
            @media(max-width : 424px){
                right:-4rem;
                width: 90%;
                padding: 0.5rem 0.5rem;
            }
        }
        :nth-child(3){
            top: 8.5rem;
            left:-7rem;
            box-shadow: 0px 0px 0px 1px #25C5D9;
            color: #25C5D9;
            text-align: center;
            width: 11rem;
            @media(max-width : 620px){
                width: 9rem;
                left: -3.5rem;
            }
            @media(max-width : 424px){
                width: 65%;
                left: -1.5rem;
            }
        }
        :nth-child(4){
            top: 14.5rem;
            right:-11.5rem;
            box-shadow: 0px 0px 0px 1px #42A4F5;
            color: #42A4F5;
            width: 15rem;
            @media(max-width : 620px){
                right:-7rem;
                width: 12rem;
            }
            @media(max-width : 424px){
                width: 75%;
                right:-3rem;
            }
        }
    }
    ul{
        width: 13rem;
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 0.153);
        border-radius: 5px;
        position: absolute;
        font-weight: 400;
        font-size: 0.9rem;
        font-family: "Ubuntu" sans-serif;
        @media(max-width : 800px){
            font-size: 0.8rem;
        }
        @media(max-width : 485px){
            font-size: 0.6rem;
        }
    }
    .list{
        top: 20.5rem;
        left:-11rem;
        box-shadow: 0px 0px 0px 1px #EB407A;
        color: #EB407A;
        width: 15rem;
        padding: 0.5rem 2rem;
        @media(max-width : 620px){
            left:-7rem;
            width: 12rem;
            padding: 1rem 1.5rem;
        }
        @media(max-width : 424px){
            width: 100%;
            left:-4.5rem;
            padding: 0.5rem 1rem;
        }
    }
    .list2{
        top: 26rem;
        right:-19.5rem;
        box-shadow: 0px 0px 0px 1px #5D5FEF;
        color: #5D5FEF;
        width: 22rem;
        padding: 0.5rem 2rem;
        @media(max-width : 800px){
            width: 20rem;
            right:-18.5rem;
        }
        @media(max-width : 745px){
            width: 17rem;
            right:-14.5rem;
            padding: 0.5rem 1rem;
        }
        @media(max-width : 620px){
            font-size: 0.7rem;
            width: 13rem;
            right:-10.5rem;
        }
        @media(max-width : 620px){
            right:-9rem;
        }
        @media(max-width : 485px){
            width: 10rem;
            right:-6.5rem;
        }
        @media(max-width : 424px){
            width: 100%;
            right:-5rem;
            top: 28rem;
            padding: 0.5rem 1rem;
        }
    }
`
const Image = styled.img`
    width: 8rem;
    margin-top: 2rem;
    
`
const Img = styled.img`
  position: absolute;
  right: 0;
  width: 8rem;
  top: -5rem;
  @media(max-width : 820px){
    width: 6rem;
}
`
const Stone = styled.img`
    position: absolute;
    top: 32%;
    left: 18%;
    width: 10rem;
    @media(max-width : 820px){
        width: 8rem;
    }
    @media(max-width : 480px){
        width: 6rem;
        top: 40%;
        left: 15%;
    }
`
