import { useState } from "react";
import { Button, Title } from "../elements";
import Flex from "./Flex";
import uploadFile from "../shared/file_uploader";

const MediaUploader = () => {
  const [scriptMultipartInput, setScriptMultipartInput] = useState<any>();

  const onSubmitScriptMultipart = () => {
    const fileInput = scriptMultipartInput.files[0];
    uploadFile(fileInput);
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
          <input
            required
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
