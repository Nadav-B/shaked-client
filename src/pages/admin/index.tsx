import Link from "next/link";
import Button from "../../elements/Button";
import { ProtectRoute } from "../../shared/protected_route";
import Flex from "../../elements/Flex";
import Title from "../../elements/Title";
const Admin = () => {
  return (
    <ProtectRoute>
      <Flex flexDirection="column" margin="30px" alignItems="center">
          <Title>עמוד ניהול</Title>
          <Link href={"/admin/contacts"}>
            <Button>הצג אנשי קשר</Button>
          </Link>
          <Link href={"/admin/article_editor"}>
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
      </Flex>
    </ProtectRoute>
  );
};



export default Admin;
