'use client'
import React from "react"
import MypageContainer from "./containers/MypageContainer"
import withUserContainer from "../global/containers/WithUserContainer"
const Mypage = () => {
  return withUserContainer(MypageContainer)
}

export default React.memo(Mypage)