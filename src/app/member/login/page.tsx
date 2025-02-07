import LoginContainer from '../containers/LoginContainer'
import { MainContentBox } from "@/app/global/components/ContentBox"
import { MainTitle } from "@/app/global/components/StyledTitle"

const LoginPage = () => {

  return (
    <MainContentBox>
      <MainTitle>로그인</MainTitle>
      <LoginContainer></LoginContainer>
    </MainContentBox>
  )
}

export default LoginPage