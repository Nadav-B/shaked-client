import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../elements/Loading";
import { from, gql } from "@apollo/client";

import SERVICES_QUERY from "../../graphql/services.query";
import Meta from "../../components/Meta";

const seo = {
  title: "השירותים שלנו",
  description:
    "מחזור משכנתא, בדיקה למשכנתא, איחוד הלוואות,  נפרדים מהמינוס, משכנתא חדשה",
  url: "https://shakedm.co.il/services",
};

const Services = ({ disableMetadata }) => {
  const { data, loading, error } = useQuery(SERVICES_QUERY);

  if (loading)
    return (
      <>
        {!disableMetadata && <Meta seo={seo} />}
        <Loading />
      </>
    );
  if (error) return <span></span>;
  return (
    <div>
      {!disableMetadata && <Meta seo={seo} />}
      <h1>השירותים שלנו</h1>
      <StyledService>
        {data.getServices.map((service, index) => (
          <StyledWrapper key={service.id}>
            <Link passHref href="/services/[id]" as={`/services/${service.id}`}>
              <ServicePreview
                index={index}
                key={service.id}
                service={service}
              />
            </Link>
          </StyledWrapper>
        ))}
      </StyledService>
    </div>
  );
};

const StyledService = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  padding: 5px;
`;

export default Services;
