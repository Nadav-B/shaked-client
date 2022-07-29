import React from "react";
import { Title, Flex, ServicePreview, Loading } from "../../elements";
import styled from "@emotion/styled";

import Seo from "../../classes/seo";
import {
  ModuleType,
  useGetModulesQuery,
} from "../../graphql/generated/graphql";

const seo = new Seo();
seo.title = "השירותים שלנו";
seo.description =
  "מחזור משכנתא, בדיקה למשכנתא, איחוד הלוואות,  נפרדים מהמינוס, משכנתא חדשה";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services`;

interface ServicesOption {
  disableMetadata: boolean;
  backSide?: boolean;
  handleClick?: any;
}

const Services: React.FC<ServicesOption> = ({
  disableMetadata,
  handleClick,
  backSide,
}) => {
  const { data, loading, error } = useGetModulesQuery({
    variables: { where: { type: ModuleType.Service } },
  });

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <span></span>;
  return (
    <Flex alignItems="center" flexDirection="column">
      <Title>השירותים שלנו</Title>
      <StyledService>
        {data?.modules?.map((service, index) => (
          <ServicePreview
            backSide={backSide}
            index={index}
            key={service?.id}
            service={service}
          />
        ))}
      </StyledService>
    </Flex>
  );
};

const StyledService = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 500px;
`;

export default Services;
