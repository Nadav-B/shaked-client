import Cookies from "js-cookie";
import Link from "next/link";
import styled from "styled-components";
import Button from "../elements/Button";

const Admin = () => {
  if (Cookies.get("token")) {
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
