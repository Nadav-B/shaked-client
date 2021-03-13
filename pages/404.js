import Link from "next/link";
import styled from "styled-components";
import Button from "../elements/Button";

const Custom404 = () => {
  return (
    <Wrapper>
      <h1>דף האינטרנט שביקשת לא נמצא</h1>
      <Link href="/">
        <a>
          <BackButtonWrapper>
            <Button>
              <img src="/assets/back.svg" alt=">" />
              <h3>חזרה לעמוד הבית</h3>
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

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
`;

export default Custom404;
