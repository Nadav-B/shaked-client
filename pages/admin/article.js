import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import Button from "../../elements/Button";
import Text from "../../elements/Text";
import api from "../../services/api";
import { contactLinks } from "../../config/contactButtonLinks";
const ArticleManager = ({ data }) => {
  const [state, setState] = useState({
    id: "",
    title: "",
    introduction: "",
    content: "",
    tag: "",
    contactButton: "",
  });

  const [imagePreview, setImagePreview] = useState();

  const [uploadImage, setUploadImage] = useState();

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await api.postArticle(state).then(
      (response) => {
        console.log(response);
        if (response.data.id && uploadImage) {
          ("posting");
          const imagePost = api.postArticleImage(response.data.id, uploadImage);
          console.log(imagePost);
        }

        setResult((prevState) => ({
          ...prevState,
          text: "נשלח בהצלחה!",
          style: "sucess",
          status: true,
        }));
      },
      (error) => {
        console.log(error);

        setResult((prevState) => ({
          ...prevState,
          text: "שגיאה",
          style: "error",
          status: false,
        }));
      }
    );
  };

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImage = async (event) => {
    setUploadImage(event.target.files[0]);
  };

  const deleteArticle = async () => {
    await api.deleteArticle(state.id).then(
      (response) => {
        setResult((prevState) => ({
          ...prevState,
          text: "נמחק בהצלחה",
          style: "sucess",
          status: true,
        }));
      },
      (error) => {
        setResult((prevState) => ({
          ...prevState,
          text: "שגיאה",
          style: "error",
          status: false,
        }));
      }
    );
  };

  const handleArticleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const id = target.value;

    setUploadImage();
    setResult({
      text: "",
      style: "",
      status: false,
    });

    if (id) {
      const selectedArticle = data.find((article) => article.id == id);
      setImagePreview(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${selectedArticle.id}`
      );
      setState({
        id: selectedArticle.id,
        title: selectedArticle.title,
        introduction: selectedArticle.introduction,
        content: selectedArticle.content,
        tag: selectedArticle.tag,
        contactButton: selectedArticle.contactButton,
      });
    } else {
      setImagePreview();
      setState({
        id: "",
        title: "",
        introduction: "",
        content: "",
        tag: "",
        contactButton: "",
      });
    }
  };

  return (
    <div>
      <h1> ערוך כתבה</h1>
      <StyledSelect name="category" onChange={handleArticleChange}>
        <option value=""> הוסף כתבה </option>
        {data.map((article) => (
          <option key={article.id} value={article.id}>
            {article.title}
          </option>
        ))}
      </StyledSelect>

      <StyledForm>
        <form onSubmit={handleSubmit}>
          <label>
            שם הכתבה
            <StyledInput
              name="title"
              value={state.title}
              placeholder="שדה חובה"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            הקדמה
            <StyledInput
              name="introduction"
              placeholder="שדה חובה"
              value={state.introduction}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            קטגוריה
            <StyledInput
              name="tag"
              placeholder="שדה חובה"
              value={state.tag}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            תוכן כתבה
            <StyledInput
              name="content"
              placeholder="שדה חובה"
              value={state.content}
              onChange={handleChange}
            />
          </label>
          <label>
            כפתור צרו קשר
            <StyledSelect value={state.contactButton} name="contactButton" onChange={handleChange}>
              {contactLinks.map((link) => (
                <option key={link.name} value={link.name}>
                  {link.name}{" "}
                </option>
              ))}
            </StyledSelect>
          </label>
          <label>
            תמונה
            <StyledInput name="image" onChange={handleImage} type="file" />
            תצוגה מקדימה
            <StyledImage src={imagePreview} alt="" />
          </label>

          <Text variant={result.style}> {result.text}</Text>
          <Button disabled={result.status} type="submit">
            שלח
          </Button>
          {state.id && (
            <Button
              type="button"
              onClick={() => {
                deleteArticle();
              }}
            >
              מחק כתבה
            </Button>
          )}
        </form>
      </StyledForm>
    </div>
  );
};

const StyledImage = styled.img`
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 50%;
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  margin: auto;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
`;

const StyledForm = styled.div`
  display: flex;
  margin-top: 100px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  bacgkround: silver;
  &::placeholder {
    color: black;
  }
`;

export async function getServerSideProps() {
  // Fetch data from external API

  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default ArticleManager;
