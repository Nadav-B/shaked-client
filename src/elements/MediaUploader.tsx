import { useState } from "react";
import Title from "../elements/Title";
import Button from "../elements/Button";
import Flex from "./Flex";
import api from "../shared/api";

const MediaUploader = () => {
  const [scriptMultipartInput, setScriptMultipartInput] = useState<any>();

  const onSubmitScriptMultipart = () => {
    const fileInput = scriptMultipartInput.files[0];
    api.uploadFile(fileInput)
  };

  return (
    <Flex alignItems="center" flexDirection="column">
      <Title> העלאת קובץ</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitScriptMultipart();
        }}
      >
        <label>
          <input required
            type="file"
            ref={(ref) => {
              setScriptMultipartInput(ref!);
            }}
          />
        </label>
        <Button type="submit">אשר</Button>
      </form>
    </Flex>
  );
};

export default MediaUploader;
