import Cookies from "js-cookie";
import Link from "next/link";

const Admin = () => {
  if (Cookies.get("token")) {
    return (
      <div>
        <Link href={"/admin/contacts"}>אנשי קשר </Link>
      </div>
    );
  } else {
    return <Link href={"/login"}> התחבר</Link>;
  }
};

export default Admin;
