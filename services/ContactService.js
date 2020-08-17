import Cookies from "js-cookie";
import axios from "axios";

const getContacts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts`;
  const token = Cookies.get("token");
  console.log("Start");
  let result;
  const res = await axios
    .get(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then(
      (response) => {
        result = response.data;
        console.log(response.data);
      },

      (error) => {
        console.log(error);
      }
    );
    return result;
};

export default getContacts;
