import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { contactLinks } from "../../../../config/contactButtonLinks";
import { ProtectRoute } from "../../../../shared/protected_route";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import query from "../../../../graphql/GetModule.graphql";
import {
  GetModule,
  GetModuleVariables,
} from "../../../../graphql/__generated__/GetModule";
import { useRouter } from "next/router";
import Loading from "../../../../elements/Loading";
import Error from "../../../../elements/Error";
import { SaveModule } from "../../../../graphql/__generated__/SaveModule";
import { ModuleInput, ModuleType } from "../../../../graphql/__generated__/globalTypes";
import mutation from "../../../../graphql/SaveModule.graphql";
import { DeleteArticle } from "../../../../graphql/__generated__/DeleteArticle";
import deleteMutation from "../../../../graphql/DeleteModule.graphql";
import MediaPicker from "../../../../elements/MediaPicker";
import Button from "../../../../elements/Button";
import Flex from "../../../../elements/Flex";
import TextUploader from "../../../../elements/TextUploader";
import Title from "../../../../elements/Title";

const ModuleManager = () => {
  const router = useRouter();
  const id = router.query.id;

  const [getModule, { data, loading, error }] = useLazyQuery<
    GetModule,
    GetModuleVariables
  >(query, {
    variables: { where: { id: String(id)} },
  });


  useEffect(() => {
    if (id!="new" && data ==null) getModule();
  
  });

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
    mediaId: null,
    contactButton: contactLinks[0].name,
  });

  const handleChange = async (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [saveModuleMutation] = useMutation<
    { saveModule: SaveModule },
    { data: ModuleInput }
  >(mutation);

  const [deleteModuleMutation] = useMutation<
    { deleteArticle: DeleteArticle },
    { id: Number }
  >(deleteMutation);

  const saveModule = (event) => {
    event.preventDefault();
    console.log(state, "now");
    saveModuleMutation({
      variables: {
        data: {
          id: state.id,
          title: state.title,
          introduction: state.introduction,
          tag: state.tag,
          mediaId: state.mediaId,
          contactButton: state.contactButton,
          type:   ModuleType.ARTICLE

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

  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;
  if (loading) return <Loading />;

  const deleteModule = (id: Number) => {
    const result = deleteModuleMutation({
      variables: {
        id: id,
      },
    });
  };

  const ImageChange = (imageId) => {
    state.mediaId = imageId;
  };
  return (
    <ProtectRoute>
      <Flex alignItems="center" flexDirection="column">
        <Title> ערוך כתבה</Title>
        <form onSubmit={saveModule}>
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
            <MediaPicker handleChange={ImageChange} mediaId={state.mediaId} />
          </label>

          <Button type="submit">שלח</Button>
          {state.id && (
            <Button
              type="button"
              onClick={() => {
                deleteModule(parseInt(state.id));
              }}
            >
              מחק כתבה
            </Button>
          )}
        </form>
      </Flex>
    </ProtectRoute>
  );
};

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

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  margin: auto;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
`;

export default ModuleManager;
