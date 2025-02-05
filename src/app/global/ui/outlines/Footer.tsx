'use client'
import React from "react"
import styled from "styled-components"
import colors from "../../styles/colors";

const { dark, light } = colors

const StyledFooter = styled.footer`
  background: ${dark};
  min-height: 200px;
  color: ${light};
`

const Footer = () => {
  return <StyledFooter>
    <div className="layout-width">뿌우</div>
  </StyledFooter>
}

export default React.memo(Footer)