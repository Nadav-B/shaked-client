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
    return <h1> hey</h1>;
  }
};

export default Admin;
