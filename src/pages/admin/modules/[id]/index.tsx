import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import Button from "../../../../elements/Button";
import Text from "../../../../elements/Text";
import { contactLinks } from "../../../../config/contactButtonLinks";
import TextUploader from "../../../../elements/TextUploader";
import TextWrapper from "../../../../elements/TextWrapper";
import { ProtectRoute } from "../../../../shared/protected_route";
import { useMutation, useQuery } from "@apollo/client";
import query from "../../../../graphql/GetModule.graphql";
import {
  GetModule,
  GetModuleVariables,
} from "../../../../graphql/__generated__/GetModule";
import Flex from "../../../../elements/Flex";
import { useRouter } from "next/router";
import Loading from "../../../../elements/Loading";
import Error from "../../../../elements/Error";
import Title from "../../../../elements/Title";
import { SaveModule } from "../../../../graphql/__generated__/SaveModule";
import { ModuleInput } from "../../../../graphql/__generated__/globalTypes";
import mutation from "../../../../graphql/SaveModule.graphql";
import { DeleteArticle } from "../../../../graphql/__generated__/DeleteArticle";
import deleteMutation from "../../../../graphql/DeleteModule.graphql";
import MediaPicker from "../../../../elements/MediaPicker";
import ModuleEditor from "../../../../elements/ModuleEditor";

const ModuleManager = () => {
  const router = useRouter();
  const id = router.query.id;
  if (id == "new") return <ModuleEditor></ModuleEditor>;

  console.log(id);

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const { data, loading, error } = useQuery<GetModule, GetModuleVariables>(
    query,
    {
      variables: { id: String(id) },
    }
  );

  const [saveModuleMutation] = useMutation<
    { data: SaveModule },
    { data: ModuleInput }
  >(mutation);

  const [deleteModuleMutation] = useMutation<
    { deleteArticle: DeleteArticle },
    { id: Number }
  >(deleteMutation);

  const saveModule = () => {
    saveModuleMutation({
      variables: {
        data: {
          id: state.id,
          title: state.title,
          introduction: state.introduction,
          tag: state.tag,
          mediaId: state.mediaId,
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

  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;
  if (loading) return <Loading />;

  const deleteModule = (id: Number) => {
    const result = deleteModuleMutation({
      variables: {
        id: id,
      },
    });
  };
  return (
    <ProtectRoute>
      <ModuleEditor
        saveModule={saveModule}
        deleteModule={deleteModule}
      ></ModuleEditor>
    </ProtectRoute>
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

export default ModuleManager;
