import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogo1 src="/images/cta-logo-one.svg"/>
        <SignUp>GET ALL THERE</SignUp>
        <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ 
            subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Description>
        <CTALogo2 src="/images/cta-logo-two.png"/>
      </CTA>
    </Container>
  )
}

export default Login

const Container=styled.div`
    height:calc(100vh - 70px);
    position:relative;
    display:flex;
    align-items:top;
    justify-content:center;
    &:before{
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image:url("/images/login-background.jpg");
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:0.7;
        z-index:-1;
    }
`
const CTA=styled.div`
    max-width:650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const CTALogo1=styled.img``
const SignUp=styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    cursor:pointer;
    font-size:18px;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    transition:all 250ms;
    &:hover{
        background:#0483ee;
    }
`
const Description=styled.p`
    font-size:11px;
    line-height:1.5;
    letter-spacing:1.5px;
    text-align:center;
`
const CTALogo2=styled.img`
    width:90%;
`