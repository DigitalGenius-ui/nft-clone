import React, {useEffect, useState} from 'react'
import styled from 'styled-components';


const Timer = () => {
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [hour, setHour] = useState("00");
    const [day, setDay] = useState("00");
    const time = () => {
        const getTimer = new Date("apr,3, 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = getTimer - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        setDay(Math.floor(gap / day));
        setHour(Math.floor((gap % day) / hour));
        setMinute(Math.floor((gap % hour) / minute));
        setSecond(Math.floor((gap % minute) / second));
    }
    useEffect(() => {
        setInterval(() => {
            time();
        }, 1000);
    })

    const getZero = (num) => {
        return num < 10 ? "0" + num : num
    }
  return (
    <Container>
        <Time>
            <h1>{getZero(day)}</h1>
            <h4>Day</h4>
        </Time>
        <span>:</span>
        <Time>
            <h1>{getZero(hour)}</h1>
            <h4>hour</h4>
        </Time>
        <span>:</span>
        <Time>
            <h1>{getZero(minute)}</h1>
            <h4>Minute</h4>
        </Time>
        <span>:</span>
        <Time>
            <h1>{getZero(second)}</h1>
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