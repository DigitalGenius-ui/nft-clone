import React, {useState} from 'react'
import { Flip } from 'react-reveal';
import styled from 'styled-components';
import { questions } from '../data/Data';
import SingleQuestion from './SingleQuestion';

const Questions = () => {

  return (
    <Container>
        <div className='shadow'></div>
        <Content>
        <Image src="https://res.cloudinary.com/ghazni/image/upload/v1648286435/nft-clone/space-human_enloh8.png" alt="space"/>
            <Flip bottom>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </Flip>
            <Question>
                {questions.map((question) => (
                    <SingleQuestion question={question} key={question.id}/>
                ))}
            </Question>
        </Content>
    </Container>
  )
}

export default Questions;

const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.900), rgba(0, 0, 0, 0.900)), 
    url("https://res.cloudinary.com/ghazni/image/upload/v1648192607/nft-clone/road-map_psazu8.png");
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .shadow{
    position: absolute;
    height: 60px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0));
    width: 100%;
    top: -2rem;
  }
    `
const Content = styled.div`
    position: relative;
    z-index: 10000;
    h1{
        font-family: 'Nunito', sans-serif;
        color: #F12D5E;
        text-align: center;
        padding: 2rem 0;
        font-weight: 900;
        @media(max-width : 630px){
            font-size: 1.6rem;
        }
        @media(max-width : 480px){
            font-size: 1.3rem;
        }
    }
    width: 70%;
    margin: 0 auto;
    @media(max-width : 950px){
        width: 90%;
    }
`
const Question = styled.div`
`
const Image = styled.img`
    position: absolute;
    top: 7rem;
    right: 2rem;
    width: 27rem;
    height: 22rem;
    object-fit: cover;
    z-index: -1;
    opacity: 0.2;
`