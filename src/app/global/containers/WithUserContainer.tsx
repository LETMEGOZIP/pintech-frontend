'use client'
import useUser from "../hooks/useUser"
import LoginContainer from "@/app/member/containers/LoginContainer"
import { MainContentBox } from "../components/ContentBox"
import { MainTitle } from "../components/StyledTitle"
import { usePathname, userSearchParams, useSearchParams } from 'next/navigation'

export default function withUserContainer(UserContainer, redirectUrl){
  const {isLogin} = useUser()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const redirectUrl = `${pathname}?${searchParams}`
   

  return isLogin ? <UserContainer/> :
  (<MainContentBox max={450} min={650} >
    <MainTitle>로그인</MainTitle>
    <LoginContainer redirectUrl = {redirectUrl} />
  </MainContentBox>)
}