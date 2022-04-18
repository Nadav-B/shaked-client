
import axios from "axios";


const getTexts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/texts`;
  const token = localStorage.get("token");

  return await axios.get(url, {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  });
};


const postArticle = async (article) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/articles/post`;
  const token = localStorage.get("token");
  return await axios.post(url, article, {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  });
};

const postArticleImage = async (id, image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/articles/postImage/${id}`;
  const token = localStorage.get("token");
  return await axios.post(url, formData, {
    headers: {
      Authorization: `${token}`,
      "content-type": "multipart/form-data",
    },
  });
};

const deleteArticle = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/articles/delete/${id}`;
  const token = localStorage.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `${token}`,
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
  const token = localStorage.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  });
};

const deleteOffer = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/offers/delete/${id}`;
  const token = localStorage.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

const postOffer = async (offer) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/offers/post`;
  const token = localStorage.get("token");
  return await axios.post(url, offer, {
    headers: {
      Authorization: `${token}`,
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
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/services`;
  const token = localStorage.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  });
};

const postService = async (service) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/services/post`;
  const token = localStorage.get("token");
  return await axios.post(url, service, {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  });
};

const deleteService = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/services/delete/${id}`;
  const token = localStorage.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

const postText = async (text) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/texts/post`;
  const token = localStorage.get("token");
  return await axios.post(url, text, {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  });
};

const deleteText = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/texts/delete/${id}`;
  const token = localStorage.get("token");
  return await axios.get(url, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export default {
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
};
