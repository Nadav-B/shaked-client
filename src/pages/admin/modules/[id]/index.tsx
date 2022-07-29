import styled from "@emotion/styled";
import React, { useState } from "react";
import { contactLinks } from "../../../../config/contactButtonLinks";
import { ProtectRoute } from "../../../../shared/protected_route";
import { useRouter } from "next/router";
import {
  Title,
  TextUploader,
  Error,
  Flex,
  Button,
  MediaPicker,
  Loading,
  Input,
} from "../../../../elements";

import {
  ModuleType,
  Module,
  useDeleteModuleMutation,
  useGetModuleQuery,
  useSaveModuleMutation,
  ModuleInput,
} from "src/graphql/generated/graphql";

const ModuleManager = () => {
  const router = useRouter();
  const id = router.query.id;

  var emptyModule = {
    id: "",
    title: "",
    introduction: "",
    content: "",
    tag: "",
    mediaId: null,
    contactButton: contactLinks[0].name,
    type: ModuleType.Article,
  } as ModuleInput;

  if (id == "new") return <EditorViewer module={emptyModule} />;
  return <LoadArticle id={id} />;
};

const LoadArticle = ({ id }) => {
  const { data, error, loading } = useGetModuleQuery({
    variables: {
      where: { id: id },
    },
  });

  if (error) return <Error description={"שגיאה בטעינה העמוד"} />;
  if (loading) return <Loading />;
  return <EditorViewer module={data?.module!} />;
};

interface EditorViewerProps {
  module: ModuleInput;
}

const EditorViewer: React.FC<EditorViewerProps> = ({ module }) => {
  Object.freeze(module);
  const [editedModule, setEditedModule] = useState({ ...module });

  editedModule.id = String(module.id);

  const handleChange = async (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setEditedModule((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(module.title);
  const ImageChange = (imageId) => {
    editedModule.mediaId = imageId;
  };
  return (
    <ProtectRoute>
      <Flex margin={20} alignItems="right" flexDirection="column">
        <Title> ערוך כתבה</Title>
        <form>
          <label>
            שם הכתבה
            <Input
              name="title"
              value={editedModule.title}
              placeholder="שדה חובה"
              width="100%"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            הקדמה
            <Input
              width="100%"
              name="introduction"
              placeholder="שדה חובה"
              value={editedModule.introduction}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            קטגוריה
            <Input
              name="tag"
              width="100%"
              value={editedModule.tag}
              onChange={handleChange}
            />
          </label>
          <label>
            תוכן כתבה
            <Input
              width="100%"
              name="content"
              placeholder="שדה חובה"
              value={editedModule.content}
              onChange={handleChange}
            />
          </label>
          <TextUploader setState={editedModule.content} />

          <label>
            תמונה
            <MediaPicker
              handleChange={ImageChange}
              mediaId={Number(editedModule.mediaId)}
            />
          </label>
          <label>
            כפתור צרו קשר
            <StyledSelect
              value={editedModule.contactButton}
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
            סוג
            <StyledSelect
              value={String(editedModule.type)}
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
          <Flex>
            <SaveModuleComponent module={editedModule} />
            <DeleteComponent id={editedModule.id} />
          </Flex>
        </form>
      </Flex>
    </ProtectRoute>
  );
};

interface SaveViewerProps {
  module: ModuleInput;
}

const SaveModuleComponent: React.FC<SaveViewerProps> = ({ module }) => {
  const [saveModule, { data, loading, error }] = useSaveModuleMutation();

  if (error) return <Error description={"שגיאה בשמירת הפרטים"}></Error>;

  return (
    <Button
      type="button"
      onClick={() =>
        saveModule({
          variables: {
            data: {
              id: String(module.id),
              title: module.title,
              introduction: module.introduction,
              tag: module.tag,
              content: module.content,
              mediaId: module.mediaId,
              type: module.type,
            },
          },
        })
      }
    >
      עדכן
    </Button>
  );
};

const DeleteComponent = (id) => {
  const [
    deleteModuleMutation,
    { data, loading, error },
  ] = useDeleteModuleMutation({
    variables: {
      id: id,
    },
  });

  if (data) {
    return <div>נמחק</div>;
  }

  return (
    <Button
      maxWidth={"120px"}
      background="red"
      type="button"
      onClick={() => {
        deleteModuleMutation({ variables: { id: id } });
      }}
    >
      מחק כתבה
    </Button>
  );
};

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
