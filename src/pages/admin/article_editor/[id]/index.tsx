import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import Button from "../../../../elements/Button";
import Text from "../../../../elements/Text";
import { contactLinks } from "../../../../config/contactButtonLinks";
import TextUploader from "../../../../elements/TextUploader";
import TextWrapper from "../../../../elements/TextWrapper";
import { ProtectRoute } from "../../../../shared/protected_route";
import { useMutation, useQuery } from "@apollo/client";
import query from "../../../../graphql/GetArticle.graphql";
import {
  GetArticle,
  GetArticleVariables,
} from "../../../../graphql/__generated__/GetArticle";
import Flex from "../../../../elements/Flex";
import { useRouter } from "next/router";
import Loading from "../../../../elements/Loading";
import Error from "../../../../elements/Error";
import Title from "../../../../elements/Title";
import { SaveArticle } from "../../../../graphql/__generated__/SaveArticle";
import { ArticleInput } from "../../../../graphql/__generated__/globalTypes";
import mutation from "../../../../graphql/SaveArticle.graphql";
import { DeleteArticle } from "../../../../graphql/__generated__/DeleteArticle";
import deleteMutation from "../../../../graphql/DeleteArticle.graphql";

const ArticleManager = () => {
  const router = useRouter();
  const id = router.query.id;
  const [imagePreview, setImagePreview] = useState("");
  const [uploadImage, setUploadImage] = useState();
  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });
  const [state, setState] = useState({
    id: null,
    title: "",
    introduction: "",
    content: "",
    tag: "",
    contactButton: contactLinks[0].name,
  });

  const { data, loading, error } = useQuery<GetArticle, GetArticleVariables>(
    query,
    {
      variables: { id: String(id) },
    }
  );

  const [submitArticle] = useMutation<
    { saveArticle: SaveArticle },
    { data: ArticleInput }
  >(mutation);

  const [deleteArticleMutation] = useMutation<
    { deleteArticle: DeleteArticle },
    { id: Number }
  >(deleteMutation);

  const saveArticle = () => {
    submitArticle({
      variables: {
        data: {
          id: state.id,
          title: state.title,
          introduction: state.introduction,
          tag: state.tag,
          contactButton: state.contactButton,
        },
      },
    }).then(
      (response) => {
        setResult((prevState) => ({
          ...prevState,
          text: "נשלח בהצלחה!",
          style: "success",
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
  useEffect(() => {
    if (data && data.article) {
      setState({
        id: data.article.id,
        title: data.article.title,
        introduction: data.article.introduction,
        content: data.article.content,
        tag: data.article.tag,
        contactButton: data.article.contactButton,
      });
    }
  }, [data]);

  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;
  if (loading) return <Loading />;

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

  const deleteArticle = (id: Number) => {
    const result = deleteArticleMutation({
      variables: {
        id: id,
      },
    });
  };
  return (
    <ProtectRoute>
      <Flex alignItems="center" flexDirection="column">
        <Title> ערוך כתבה</Title>
        <TextWrapper>
          <form onSubmit={saveArticle}>
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
            <TextUploader setState={setState} />
            <label>
              כפתור צרו קשר
              <StyledSelect
                value={state.contactButton}
                name="contactButton"
                onChange={handleChange}
              >
                {contactLinks.map((link) => (
                  <option key={link.name} value={link.name}>
                    {link.name}{" "}
                  </option>
                ))}
              </StyledSelect>
            </label>
            <label>
              תמונה
              <StyledInput
                name="image"
                accept="image/*"
                onChange={handleImage}
                type="file"
              />
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
                  deleteArticle(parseInt(data.article.id));
                }}
              >
                מחק כתבה
              </Button>
            )}
          </form>
        </TextWrapper>
      </Flex>
    </ProtectRoute>
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

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;

  display: inline-block;
  font-size: ${(p) => p.theme.fontSize.normal};

  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &::placeholder {
    color: black;
  }
`;

export default ArticleManager;
