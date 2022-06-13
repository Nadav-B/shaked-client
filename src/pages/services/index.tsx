import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import Loading from "../../elements/Loading";
import Meta from "../../components/meta";

import query from "../../graphql/GetModules.graphql";
import Title from "../../elements/Title";
import Flex from "../../elements/Flex";
import Seo from "../../classes/seo";
import { GetModules } from "../../graphql/__generated__/GetModules";
import { GetModulesVariables } from "../../graphql/__generated__/GetModules";
import { ModuleType } from "../../graphql/__generated__/globalTypes";

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
  const { data, loading, error } = useQuery<GetModules, GetModulesVariables>(
    query,
    {
      variables: { where: { type: ModuleType.SERVICE } },
    }
  );

  if (loading)
    return (
      <>
        {!disableMetadata && <Meta seo={seo} />}
        <Loading />
      </>
    );
  if (error) return <span></span>;
  return (
    <Flex alignItems="center" flexDirection="column">
      {!disableMetadata && <Meta seo={seo} />}
      <Title>השירותים שלנו</Title>
      <StyledService>
        {data?.modules.map((service, index) => (
          <ServicePreview
            backSide={backSide}
            index={index}
            key={service.id}
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
