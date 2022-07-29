import styled from "@emotion/styled";
import { Flex, Title, Button } from "../../../elements";
import { useGetAllModulesQuery } from "src/graphql/generated/graphql";
import Router from "next/router";

const ModuleSelector = () => {
  const { data, loading, error } = useGetAllModulesQuery();

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    Router.push(`modules/${value}`);
  };

  const addModule = () => {
    Router.push(`modules/new`);
  };
  return (
    <Flex alignItems="center" flexDirection="column" margin={"20px"}>
      <Title> כתבות</Title>
      <StyledSelect name="category" onChange={handleChange}>
        <option value=""> ערוך טקסט </option>
        {data &&
          data.modules?.map((module) => (
            <option key={module?.id} value={module?.id}>
              {module?.title}
            </option>
          ))}
      </StyledSelect>
      <Button onClick={() => addModule()}>הוסף מודל</Button>
    </Flex>
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

export default ModuleSelector;
