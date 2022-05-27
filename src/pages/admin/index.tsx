import Link from "next/link";
import Button from "../../elements/Button";
import { ProtectRoute } from "../../shared/protected_route";
import Flex from "../../elements/Flex";
import Title from "../../elements/Title";
import styled from "@emotion/styled";
const Admin = () => {
  return (
    <ProtectRoute>
      <Flex flexWrap="wrap" flexDirection="column" alignItems="center">
        <Title>עמוד ניהול</Title>
        <Flex flexDirection="row" margin="30px" alignItems="center">
          <Link href={"/admin/contacts"}>
            <StyledButton>אנשי קשר</StyledButton>
          </Link>
          <Link href={"/admin/article"}>
            <StyledButton>כתבות</StyledButton>
          </Link>
          <Link href={"/admin/service"}>
            <StyledButton> שירותים</StyledButton>
          </Link>
          <Link href={"/admin/about"}>
            <StyledButton> אודות</StyledButton>
          </Link>
          <Link href={"/admin/offer"}>
            <StyledButton> הצעות</StyledButton>
          </Link>
          <Link href={"/admin/media"}>
            <StyledButton> מדיה</StyledButton>
          </Link>
        </Flex>
      </Flex>
    </ProtectRoute>
  );
};

const StyledButton = styled.div`
  padding: 20px;
  border-radius: ${(p) => p.theme.border}px;
  cursor: pointer;
  width: 120px;
  height: 60px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 15px;

  :hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
`;
export default Admin;
