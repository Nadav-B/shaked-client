import Link from "next/link";
import Button from "../../elements/Button";
import { ProtectRoute } from "../../shared/protected_route";
import Flex from "../../elements/Flex";
import Title from "../../elements/Title";
import styled from "@emotion/styled";
const Admin = () => {
  return (
    <ProtectRoute>
      <Flex flexDirection="column" alignItems="center">
        <Title>עמוד ניהול</Title>
        <Flex flexDirection="column" margin="30px" alignItems="center">
          <Link href={"/admin/contacts"}>
            <Button >אנשי קשר</Button>
          </Link>
          <Link href={"/admin/article_editor"}>
            <Button>כתבות</Button>
          </Link>
          <Link href={"/admin/service"}>
            <Button> שירותים</Button>
          </Link>
          <Link href={"/admin/about"}>
            <Button> אודות</Button>
          </Link>
          <Link href={"/admin/offer"}>
            <Button> הצעות</Button>
          </Link>
          <Link href={"/media"}>
            <Button> מדיה</Button>
          </Link>
        </Flex>
      </Flex>
    </ProtectRoute>
  );
};


const StyledCategory = styled.button``;
export default Admin;
