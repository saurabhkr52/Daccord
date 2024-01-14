import Spline from '@splinetool/react-spline';
import styled, { css } from "styled-components"

import logo from "./images/logo.svg"
import icontwitter from "./images/icon-twitter.svg"
import iconyoutube from "./images/icon-youtube.svg"
import iconlaptop from "./images/icon-laptop.svg"



export default function App() {
  return (
    <Wrapper>
    <Menu>
      <li><img  className='hi' src={logo} alt='logo' /> </li>
      <li><a href='/'>home</a></li>
      <li><a href='/'>download</a></li>
      <li><a href='/'>App</a></li>
      <li><a href='/'>login</a></li>
      <li><button> Get Started</button></li>
    </Menu>
    <Spline className='spline' scene="https://prod.spline.design/cTziCmowlcZWqJC3/scene.splinecode" />
    <Content>
      <h1>Collaborate with people </h1>
      <p>welcome to this sucking world,i am so embarrased to make this website i have no idea why i am doing thi shit</p>
    <button> <img src={iconlaptop} alt='download' /> download for mac</button>
    </Content>
    <Social>
    <div />
    <img src={icontwitter} alt='twitter' />
    <img src={iconyoutube} alt='Youtube' />
    </Social>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline{
    position: absolute;
    left: 250px;
    margin: 0px;

${'' /* what is this cool shit, let's see this tooo. */}
    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px)
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px)
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px)
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.745) translateX(-50px)
    }

  } 
`;
const Content = styled.div`
position:absolute;
top:100px;


display: flex;
flex-direction: column;
gap:80px;

h1{
 font-family: "Spline Sans Mono", monospace; 
 font-weight: bold;;
 font-size: 70px;
 margin: 0;
 max-width: 500px;
}
p{
  font-weight: normal:
  line-height: 150px;
  max-width: 450px;
}

button{
  ${'' /* style of css */}
  background: rgba(0,0,0,0.2);
  color: white;
  border: 0px;
  font-size: 16px;
  padding: 12px 30px
  border-radius: 14px;
  max-width:280px;
  border:1px solid rgba(255,255,255,0.1)
  backdrop-filter: blur(20px);

${'' /* how to contain and arrange elements in a box */}
  display: flex;
  gap: 12px;
  justify-Content: center;
  allign-items: center;

${'' /* transition for class */}
  transition: 1s;

${'' /* hover state of the button */}

 :hover {
 ${'' /* border:1px solid rgba(255,255,255,0.8) */}
 transform: translateY(-3px);
}

}


h1,p,button{
  margin: 0 30px 0 100px;
}

`

const Menu = styled.ul` 
  display: flex;
  allign-items: center;
  gap: 30px;
  margin: 40px 30px 0px 100px;
  padding: 0;

  li{
    list-style: none;
    margin: 0;
    
    a {
      text-decoration: none;
      padding: 8px 20px;
      border: 1px solid rgba(255,255,255,0)
      transition: 1s;
      border-radius: 14px;
      color: white;

      :hover {
        border: 1px solid rgba(255,255,255,0.2);
      }
    } 
    button{
  ${'' /* style of css */}
  background: rgba(0,0,0,0.2);
  color: white;
  border: 0px;
  font-size: 16px;
  padding: 12px 30px
  border-radius: 14px;
  max-width:280px;
  border:1px solid rgba(255,255,255,0.1)
  backdrop-filter: blur(20px);

  }
`
const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  allign-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #EDE4FF 0%,
      #D7BBF5 33.57%,
      #A076F9 65.86%,
      #6528F7 100%
    );
  }
`
