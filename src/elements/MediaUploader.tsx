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
      <Title>קובץ חדש</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitScriptMultipart();
        }}
      >
        <label>
          <input
            type="file"
            ref={(ref) => {
              setScriptMultipartInput(ref!);
            }}
          />
        </label>
        <Button type="submit">אישור</Button>
      </form>
    </Flex>
  );
};

export default MediaUploader;
