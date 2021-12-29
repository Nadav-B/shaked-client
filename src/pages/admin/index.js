import Link from "next/link";
import styled from '@emotion/styled';
import Button from "../../elements/Button";
import Wrapper from "../../elements/Wrapper";
import { ProtectRoute } from "../../shared/protected_route";

const Admin = () => {
  return (
    <ProtectRoute>
      <Wrapper>
        <StyledAdmin>
          <h1>עמוד ניהול</h1>
          <Link href={"/admin/contacts"}>
            <Button>הצג אנשי קשר</Button>
          </Link>
          <Link href={"/admin/article"}>
            <Button> ערוך או הוסף כתבה</Button>
          </Link>
          <Link href={"/admin/service"}>
            <Button> ערוך או הוסף שירות</Button>
          </Link>
          <Link href={"/admin/about"}>
            <Button> ערוך או הוסף אודות</Button>
          </Link>
          <Link href={"/admin/offer"}>
            <Button> ערוך או הוסף הצעות</Button>
          </Link>
        </StyledAdmin>
      </Wrapper>
    </ProtectRoute>
  );
};

const StyledAdmin = styled.div`
  display: block;
  padding: 4px;
  width: 80%;
  margin: auto;
  height: 100%;
`;

export default Admin;
