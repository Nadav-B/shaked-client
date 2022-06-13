import Link from "next/link";
import styled from "@emotion/styled";
import Button from "../elements/Button";
import Flex from "../elements/Flex";
import Title from "../elements/Title";

const Custom404 = () => {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Title> העמוד המבוקש לא נמצא</Title>
      <Link href="/">
        <a>
          <BackButtonWrapper>
            <Button>
              <Flex>

              <img src="/assets/back.svg" alt=">" />
               חזרה לעמוד הראשי
              </Flex>

            </Button>
          </BackButtonWrapper>
        </a>
      </Link>
    </Flex>
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
