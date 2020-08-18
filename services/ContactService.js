import Cookies from "js-cookie";
import axios from "axios";

const getContacts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts`;
  const token = Cookies.get("token");
  return  await axios
    .get(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
};

export default getContacts;
