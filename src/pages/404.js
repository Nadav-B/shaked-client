import Link from "next/link";
import styled from '@emotion/styled';
import Button from "../elements/Button";
import Wrapper from "../elements/Wrapper";

const Custom404 = () => {
  return (
    <Wrapper>
      <h1>דף האינטרנט שביקשת לא נמצא</h1>
      <Link href="/">
        <a>
          <BackButtonWrapper>
            <Button>
              <img src="/assets/back.svg" alt=">" />
              <h3> לעמוד הבית</h3>
            </Button>
          </BackButtonWrapper>
        </a>
      </Link>
    </Wrapper>
  );
};
const BackButtonWrapper = styled.div`
  max-width: 300px;
  margin: auto;
  img {
    display: inline;
    width: 20px;
  }

  h3 {
      display: inline;
  }
`;


export default Custom404;
