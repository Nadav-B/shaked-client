import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import Button from "../../elements/Button";
import Text from "../../elements/Text";

const Article = ({ data }) => {
  const [state, setState] = useState({
    title: "",
    introduction: "",
    content: "",
    tag: "",
    contactButton: "",
  });

  const [image, setImage] = useState();

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const handleSubmit = async (event) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts/insert`;

    event.preventDefault();

    const res = await axios.post(url, state).then(
      (response) => {
        console.log(response);
        setResult((prevState) => ({
          ...prevState,
          text: "נשלח בהצלחה!",
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
  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const id = target.value;

    if (id) {
      const selectedArticle = data.find((article) => article.id == id);

      setState({
        title: selectedArticle.title,
        introduction: selectedArticle.introduction,
        content: selectedArticle.content,
        tag: selectedArticle.tag,
        contactButton: selectedArticle.contactButton,
      });
      setImage(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${selectedArticle.id}`
      );
    } else {
      setState({
        title: "",
        introduction: "",
        content: "",
        tag: "",
        contactButton: "",
      });
      setImage();
    }
  };

  return (
    <div>
      <h1> ערוך כתבה</h1>
      <StyledSelect name="category" onChange={handleChange}>
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
            <StyledInput
              name="address"
              value={state.contactButton}
              onChange={handleChange}
            />
          </label>
          <label>
            תמונה
            <StyledImage src={image} alt="" />
          </label>

          <Text variant={result.style}> {result.text}</Text>
          <Button disabled={result.status} type="submit">
            שלח
          </Button>
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

export default Article;
