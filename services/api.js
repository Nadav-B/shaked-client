import Cookies from "js-cookie";
import axios from "axios";

const getContacts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const deleteContact = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts/delete/${id}`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const postArticle = async (article) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles/post`;
  const token = Cookies.get("token");
  return await axios.post(url, article, {
    headers: {
      Authorization: `Basic ${token}`,
      Accept: "application/json",
    },
  });
};

const postArticleImage = async (id, image) => {
  console.log(id);
  console.log(image);
  const formData = new FormData();
  formData.append("image", image);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles/postImage/${id}`;
  const token = Cookies.get("token");
  return await axios.post(url, formData, {
    headers: {
      Authorization: `Basic ${token}`,
      "content-type": "multipart/form-data",
    },
  });
};

const deleteArticle = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles/delete/${id}`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

export default {
  getContacts,
  deleteContact,
  postArticle,
  postArticleImage,
  deleteArticle,
};
