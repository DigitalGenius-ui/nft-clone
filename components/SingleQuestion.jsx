import React, {useState} from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

const SingleQuestion = ({question}) => {
    const { color, title, disc } = question;
    const [open, setOpen] = useState(false)
  return (
    <Fade bottom>
        <Container style={{boxShadow: `0px 0px 0px 1px #${color}`}}>
            <Head>
            <h2 style={{color:`#${color}`}}>{title}</h2>
            <span onClick={() => setOpen(!open)}>
            {open? 
            <FaMinus style={{color : `#${color}`}}/> : 
            <FaPlus style={{color : `#${color}`}}/>}
            </span>
            </Head>
            <Body open={open}>
            <p>{disc}</p>
            </Body>
        </Container>
    </Fade>
  )
}

export default SingleQuestion;

const Container = styled.div`
    margin-bottom: 1rem;;
    padding: 1rem ;
    background-color: rgba(255, 255, 255, 0.153);
    border-radius: 5px;
    margin-bottom: 0.8rem;
`

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    span{
        cursor: pointer;
        font-size: 1rem;
        margin-top: 0.3rem;
    }
    h2{
        font-size: 1rem;
        font-weight: 500;
    }
`
const Body = styled.div`
    display: ${props => props.open ? "inline" : "none"};
    p{
        width: 48rem;
        font-size: 0.9rem;
        padding-top: 1rem;
        @media(max-width : 950px){
        width: 100%;
        }
    }
`