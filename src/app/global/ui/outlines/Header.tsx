'use client'
import React from "react"
import styled from "styled-components"
import Link from "next/link";
import Image from "next/image";
import { SlLogin } from "react-icons/sl";
import { FaUserPlus, FaSearch, FaHome } from "react-icons/fa";
import colors from "../../styles/colors";
import sizes from "../../styles/sizes";
import logo from '../../assets/images/logo.png'

const { primary, light, dark, white } = colors
const { small, normal, medium, big, extra } = sizes

const StyledHeader = styled.header`
  .site-top {
    background: ${light};
    height: 45px;

    .layout-width {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        height: 45px;
        a{
          line-height: 45px;
        }
        a + a {
          margin-left: 10px;
        }
      }
      
      svg {
        font-size: ${big};
        padding: 0;
        margin: 0;
      }
    }
  }
  
  .logo-search{
    .layout-width{
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;
    }
  }
`

const StyledForm =styled.form`
  width: 350px;
  display: flex;
  border: 5px solid ${dark};
  
  button {
    width: 45px;
    background: ${dark};
    color: ${white};
    border: 0;
    cursor: pointer;
    
    svg{
      font-size: ${big};
      margin: 0;
      padding: 0;
    }
  }
  
  input{
    flex-grow: 1;
    border: 0;
    padding: 10px;
    font-size: ${medium}
  }
`

const StyledMenu = styled.nav`
  background: ${primary};

  .layout-width {
    display: flex;
    height: 50px;
    line-height: 50px;
    a {
      color: ${light};
      font-size: ${medium};
      padding: 0 40px;

      &:hover, &.on{
        background: ${dark};
        border-radius: 5px;
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="site-top">
        <div className="layout-width">
          <div className="left">
            <Link href="/">
              <FaHome />
            </Link>
          </div>
          <div className="right">
            <a href="/member/join">
              <FaUserPlus /> 회원가입
            </a>
            <a href="/member/login">
              <SlLogin /> 로그인
            </a>
          </div>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search">
        <div className="layout-width">
          <Link href="/" className="logo">
            <Image src={logo} alt="로고" priority={true} />
          </Link>

          <StyledForm method="GET" action="/board/search" autoComplete="off">
            <input type="text" name="skey" placeholder="검색어를 입력하세요" />
            <button type="submit">
              <FaSearch />
            </button>
          </StyledForm>
        </div>
      </div>
      {/* logo-search */}
      <StyledMenu>
        <div className="layout-width">
          <a href="#">메뉴1</a>
          <a href="#">메뉴2</a>
          <a href="#">메뉴3</a>
        </div>
      </StyledMenu>
    </StyledHeader>
  )
}

export default React.memo(Header)