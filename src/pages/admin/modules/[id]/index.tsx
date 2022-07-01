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
import {
  ModuleInput,
  ModuleType,
} from "../../../../graphql/__generated__/globalTypes";
import mutation from "../../../../graphql/SaveModule.graphql";
import deleteMutation from "../../../../graphql/DeleteModule.graphql";
import MediaPicker from "../../../../elements/MediaPicker";
import Button from "../../../../elements/Button";
import Flex from "../../../../elements/Flex";
import TextUploader from "../../../../elements/TextUploader";
import Title from "../../../../elements/Title";
import { DeleteModule } from "../../../../graphql/__generated__/DeleteModule";

const ModuleManager = () => {
  const router = useRouter();
  const id = router.query.id;

  const [getModule, { data, loading, error }] = useLazyQuery<
    GetModule,
    GetModuleVariables
  >(query, {
    variables: { where: { id: String(id) } },
  });

  var emptyModule = {
    id: null,
    title: "",
    introduction: "",
    content: "",
    tag: "",
    mediaId: null,
    contactButton: contactLinks[0].name,
    type: ModuleType.ARTICLE,
  };

  if (id == "new") return <EditorViewer module={emptyModule} />;
  useEffect(() => {
    if (id != "new" && data == null) getModule();
  });

  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;
  if (loading) return <Loading />;

  if (data) {
    var module = {
      id: data.module.id,
      title: data.module.title,
      introduction: data.module.introduction,
      content: data.module.content,
      tag: data.module.tag,
      mediaId: data.module.mediaId,
      contactButton: data.module.contactButton,
      type: data.module.type,
    };
  }
  if (data) return <EditorViewer module={module} />;
};

interface Module {
  id: string;
  title: string;
  introduction: string;
  content: string;
  tag: string;
  mediaId: number;
  contactButton: string;
  type: ModuleType;
}

interface EditorViewerProps {
  module: Module;
}

const EditorViewer: React.FC<EditorViewerProps> = ({
  module = {
    id: "null",
    title: "",
    introduction: "",
    content: "",
    tag: "",
    mediaId: null,
    contactButton: contactLinks[0].name,
    type: ModuleType.ARTICLE,
  },
}) => {
  const [state, setState] = useState(module);

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });
  const [saveModuleMutation] = useMutation<
    { saveModule: SaveModule },
    { data: ModuleInput }
  >(mutation);

  const [deleteModuleMutation] = useMutation<
    { deleteArticle: DeleteModule },
    { id: Number }
  >(deleteMutation);

  const deleteModule = (id: Number) => {
    const result = deleteModuleMutation({
      variables: {
        id: id,
      },
    });
  };

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
          type: state.type,
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
              value={state.tag}
              onChange={handleChange}
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

          <label>
            סוג
            <StyledSelect
              value={String(state.type)}
              name="type"
              onChange={handleChange}
            >
              {Object.values(ModuleType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </StyledSelect>
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
