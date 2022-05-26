import { useMutation } from "@apollo/client";
import { useState } from "react";
import mutation from "../../../graphql/SaveMedia.graphql";

const MediaManager = () => {
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
    <div>
      <h3> Upload script using multipart HTTP POST</h3>
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
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MediaManager;
