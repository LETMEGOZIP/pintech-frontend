import JoinContainer from "../containers/JoinContainer";
import { MainTitle } from "@/app/global/components/StyledTitle";
import { MainContentBox } from "@/app/global/components/ContentBox";

const JoinPage = () => {
  return <>
    <MainContentBox max={750} min={650}>
      <h1>삐쀼</h1>
      <JoinContainer/>
    </MainContentBox>
  </>
}

export default JoinPage;