import Cookies from "js-cookie";
import ContactsManager from "./admin/ConatactsManager";
import { Router } from "next/router";

const Admin = () => {

  if (Cookies.get("token")) {
    return (
      <div>
        <ContactsManager />
      </div>
    );
  } else {
    return (<h1> </h1>)
  }
};

export default Admin;
