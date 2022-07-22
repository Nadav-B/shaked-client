import React from "react";
import ServicePreview from "../../elements/ServicePreview";
import styled from "@emotion/styled";
import Loading from "../../elements/Loading";
import Meta from "../../components/meta";

import Title from "../../elements/Title";
import Flex from "../../elements/Flex";
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
