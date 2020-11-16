import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import Button from "../../elements/Button";
import Text from "../../elements/Text";
import { contactLinks } from "../../config/contactButtonLinks";
import api from "../../shared/api";
import TextUploader from "../../elements/TextUploader";
import TextWrapper from "../../elements/TextWrapper";

const ServiceManager = ({ data }) => {
  const [state, setState] = useState({
    id: "",
    title: "",
    introduction: "",
    content: "",
    contactButton: contactLinks[0].name,
  });

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await api.postService(state).then(
      (response) => {
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

  const deleteArticle = async () => {
    await api.deleteService(state.id).then(
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

    setResult({
      text: "",
      style: "",
      status: false,
    });

    if (id) {
      const storedObject = data.find((service) => service.id == id);

      setState({
        id: storedObject.id,
        title: storedObject.title,
        introduction: storedObject.introduction,
        content: storedObject.content,
        contactButton: storedObject.contactButton,
      });
    } else {
      setState({
        id: "",
        title: "",
        introduction: "",
        content: "",
        contactButton: contactLinks[0].name,
      });
    }
  };

  return (
    <TextWrapper>
      <h1> ערוך שירות</h1>
      <StyledSelect name="category" onChange={handleArticleChange}>
        <option value=""> הוסף שירות </option>
        {data.map((service) => (
          <option key={service.id} value={service.id}>
            {service.title}
          </option>
        ))}
      </StyledSelect>

      <StyledForm>
        <form onSubmit={handleSubmit}>
          <label>
            שם השירות
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
            תוכן כתבה
            <StyledInput
              name="content"
              placeholder="שדה חובה"
              value={state.content}
              onChange={handleChange}
            />
          </label>
          <TextUploader setState={setState}/> 

          <label>
            כפתור צרו קשר
            <StyledSelect
              value={state.contactButton}
              name="contactButton"
              onChange={handleChange}
              value={state.contactButton}
            >
              {contactLinks.map((link) => (
                  <option  key={link.name} value={link.name}>
                  {link.name}{" "}
                </option>
              ))}
            </StyledSelect>
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
    </TextWrapper>
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
  font-size: ${(p) => p.theme.fontSize.normal};

  bacgkround: silver;
  &::placeholder {
    color: black;
  }
`;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await api.getServices();
  const data = res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default ServiceManager;
