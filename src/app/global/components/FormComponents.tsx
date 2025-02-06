'use client'
import { styled, css } from "styled-components";
import colors from "../styles/colors";
import sizes from "../styles/sizes";
const { dark, light } = colors
const { normal } = sizes

const commonStyle = css`
  border: 1px solid ${light}
  color: ${dark}
  font-size: ${normal};
  border-radius: 2px;
  & + & {
    margin-top: 5px;
  }
  width: 100%;
  padding: 0 10px;
`



// 입력 항목

export const Input = styled.input`
  ${commonStyle}
  height: 40px;
  resize: none;

  border-coloer: ${({color}) => ( color ? colors[color] ?? light : light)};
  ${({width})=> css`
    width: ${width}px;
  `}
  ${({height})=> css`
    height: ${height}px;
  `}
`
export const Textarea = styled.textarea`
  ${commonStyle}
`