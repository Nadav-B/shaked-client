import React, { useState } from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import Link from "next/link";
import Flex from "./Flex";
import Title from "./Title";
import { contactLinks } from "../config/contactButtonLinks";
import TextUploader from "./TextUploader";
import Button from "./Button";
import MediaPicker from "./MediaPicker";

interface ModuleEditorProps {
  saveModule: any;
  deleteModule: any;
}

const ModuleEditor: React.FC<ModuleEditorProps> = ({
  saveModule,
  deleteModule,
}) => {
  const [state, setState] = useState({
    id: null,
    title: "",
    introduction: "",
    content: "",
    tag: "",
    mediaId: null,
    contactButton: contactLinks[0].name,
  });

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

  const ImageChange = (imageId) => {
    state.mediaId = imageId;
  };
  return (
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
export default ModuleEditor;
