import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt=""/>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt=""/>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt=""/>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt=""/>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt=""/>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt=""/>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt=""/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt=""/>
    </Nav>
  )
}

export default Header

const Nav=styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
  overflow-x:hidden;
`
const Logo=styled.img`
    width:80px;
`
const NavMenu=styled.div`
  display:flex;
  flex:1;
  margin-left:25px;
  align-items:center;
  a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor-pointer;
    img{
      height:20px;
    }
    span{
      font-size:13px;
      letter-spacing:1.4px;
      position:relative;
      &:after{
        content:"";
        height:2px;
        background:white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
        opacity:0;
        transform-origin:left center;
        transform:scaleX(0);
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      }
    }
    &:hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
      }
    }
  }
`
const UserImg=styled.img`
  height:48px;
  width:48px;
  border-radius:50%;
  cursor:pointer;
`