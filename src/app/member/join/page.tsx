import JoinContainer from "./containers/JoinContainer";
import { MainTitle } from "@/app/global/components/StyledTitle";
import { MainContentBox } from "@/app/global/components/ContentBox";

const JoinPage = () => {
  return <>
    <MainContentBox max={750} min={650}>
      <MainTitle>삐쀼</MainTitle>
      <JoinContainer/>
    </MainContentBox>
  </>
}

export default JoinPage;