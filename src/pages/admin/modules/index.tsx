import { useQuery } from "@apollo/client";
import { GetAllModules } from "../../../graphql/__generated__/GetAllModules";
import query from "../../../graphql/GetModules.graphql";
import styled from "@emotion/styled";
import Flex from "../../../elements/Flex";
import Button from "../../../elements/Button";
import { useRouter } from "next/router";
import Title from "../../../elements/Title";

const ModuleSelector = () => {
  const { data, loading, error } = useQuery<GetAllModules>(query);
  const router = useRouter();

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    router.push(`modules/${value}`);
  };


  const addModule = () => {

    router.push(`modules/new`);
  };
  return (
    <Flex alignItems="center" flexDirection="column" margin={"20px"}>
      <Title> כתבות</Title>
      <StyledSelect name="category" onChange={handleChange}>
        <option value=""> ערוך טקסט </option>
        {data &&
          data.modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.title}
            </option>
          ))}
      </StyledSelect>
      <Button onClick={ ()=> addModule()}>הוסף מודל</Button>
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
