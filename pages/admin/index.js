import Link from "next/link";
import styled from "styled-components";
import Button from "../../elements/Button";
import api from "../../shared/api";

const Admin = () => {
  if (api.isAuthenticated()) {
    return (
      <StyledAdmin>
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
      </StyledAdmin>
    );
  } else {
    return <Link href={"/login"}> התחבר</Link>;
  }
};

const StyledAdmin = styled.div`
  display: block;
  padding: 4px;
  margin: 4px;
  height: 100%;
`;

export default Admin;
