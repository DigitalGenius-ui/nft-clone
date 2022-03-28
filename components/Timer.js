import React from 'react'
import styled from 'styled-components';

const Timer = () => {
  return (
    <Container>
        <Time>
            <h1>01</h1>
            <h4>Day</h4>
        </Time>
        <span>:</span>
        <Time>
            <h1>01</h1>
            <h4>hour</h4>
        </Time>
        <span>:</span>
        <Time>
            <h1>01</h1>
            <h4>Minute</h4>
        </Time>
        <span>:</span>
        <Time>
            <h1>01</h1>
            <h4>Second</h4>
        </Time>
        <Image 
        src="https://res.cloudinary.com/ghazni/image/upload/v1648192604/nft-clone/comming_ezsprl.png" alt="coming"/>
    </Container>
  )
}

export default Timer;

const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    span{
        font-size: 2rem;
        padding: 0 0.8rem;
        margin-bottom: 2.5rem;
    }
`
const Time = styled(Container)`
    flex-direction: column;
    h4{
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
    }
`

const Image = styled.img`
    position: absolute;
    right: 5rem;
    top : 2.5rem;
    width: 9rem;
`