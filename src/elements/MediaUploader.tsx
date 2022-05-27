import { useMutation } from "@apollo/client";
import { useState } from "react";
import mutation from "../graphql/SaveMedia.graphql";
import Title from "../elements/Title";
import Button from "../elements/Button";
import Flex from "./Flex";

const MediaUploader = () => {
  const [scriptMultipartInput, setScriptMultipartInput] = useState<any>();

  const [
    saveMedia,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(mutation);

  const onSubmitScriptMultipart = () => {
    const fileInput = scriptMultipartInput.files[0];
    saveMedia({
      variables: { data: fileInput },
    });
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
