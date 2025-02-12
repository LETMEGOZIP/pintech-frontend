import LoginContainer from '../containers/LoginContainer'
import { MainContentBox } from "@/app/global/components/ContentBox"
import { MainTitle } from "@/app/global/components/StyledTitle"

const LoginPage = () => {

  return (
    <MainContentBox>
      <h1>로그인</h1>
      <LoginContainer></LoginContainer>
    </MainContentBox>
  )
}

export default LoginPage