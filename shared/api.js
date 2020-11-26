import Cookies from "js-cookie";
import axios from "axios";

const isAuthenticated = () => {
  var connected = false;
  if (Cookies.get("token")) {
    connected = true;
  }
  return connected;
};

const logout = () => {
  Cookies.remove("token");
};

const getContacts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/contacts`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const postContact = async (contact) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/contacts/post`;
  return await axios.post(url, contact, {
    headers: {
      Accept: "application/json",
    },
  });
};

const deleteContact = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/contacts/delete/${id}`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const getTexts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/texts`;
  return await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
};


const getArticle = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/${id}`;
  return await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getArticles = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles`;
  return await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
};

const postArticle = async (article) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/articles/post`;
  const token = Cookies.get("token");
  return await axios.post(url, article, {
    headers: {
      Authorization: `Basic ${token}`,
      Accept: "application/json",
    },
  });
};

const postArticleImage = async (id, image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/articles/postImage/${id}`;
  const token = Cookies.get("token");
  return await axios.post(url, formData, {
    headers: {
      Authorization: `Basic ${token}`,
      "content-type": "multipart/form-data",
    },
  });
};

const deleteArticle = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/articles/delete/${id}`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const getOffer = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/offers/offer/${id}`;
  return await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getOfferByPath = async (path) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/offers/offer/path/${path}`;
  return await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getOffers = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/offers`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
      Accept: "application/json",
    },
  });
};

const deleteOffer = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/offers/delete/${id}`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const postOffer = async (offer) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/offers/post`;
  const token = Cookies.get("token");
  return await axios.post(url, offer, {
    headers: {
      Authorization: `Basic ${token}`,
      Accept: "application/json",
    },
  });
};

const getService = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/services/service/${id}`;
  return await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getServices = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/services`;
  return await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
};

const postService = async (service) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/services/post`;
  const token = Cookies.get("token");
  return await axios.post(url, service, {
    headers: {
      Authorization: `Basic ${token}`,
      Accept: "application/json",
    },
  });
};

const deleteService = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/services/delete/${id}`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const postText = async (text) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/texts/post`;
  const token = Cookies.get("token");
  return await axios.post(url, text, {
    headers: {
      Authorization: `Basic ${token}`,
      Accept: "application/json",
    },
  });
};

const deleteText = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/texts/delete/${id}`;
  const token = Cookies.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

export default {
  getContacts,
  postContact,
  deleteContact,
  getArticle,
  getArticles,
  postArticle,
  postArticleImage,
  deleteArticle,
  getService,
  getServices,
  postService,
  deleteService,
  getOffer,
  getOfferByPath,
  getOffers,
  deleteOffer,
  postOffer,
  getTexts,
  postText,
  deleteText,
  isAuthenticated,
  logout,
};
