import axios from "axios";

const uploadFile = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  const url = `${process.env.NEXT_PUBLIC_API_INTERN_URL}/media/upload`;
  const token = localStorage.getItem("token");
  return await axios.post(url, formData, {
    headers: {
      Authorization: `${token}`,
      "content-type": "multipart/form-data",
    },
  });
};

export { uploadFile };
