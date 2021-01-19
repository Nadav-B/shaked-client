import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../elements/Loading";
import { from, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import MetadataManager from "../../components/metadataManager";

const seo = {
  title: "השירותים שלנו",
  description:
    "מחזור משכנתא, בדיקה למשכנתא, איחוד הלוואות,  נפרדים מהמינוס, משכנתא חדשה",
  url: "https://www.shakedm.co.il/services",
};

const SERVICES_QUERY = gql`
  {
    getServices {
      id
      title
      introduction
    }
  }
`;

const Services = ({ disableMetadata }) => {
  const metadata = MetadataManager(seo, disableMetadata);

  const { data, loading, error } = useQuery(SERVICES_QUERY);

  if (loading)
    return (
      <>
        <Helmet
          title={metadata.title}
          link={metadata.links}
          meta={metadata.metadatas}
        />
        <Loading />
      </>
    );
  if (error) return <span></span>;
  return (
    <div>
      <Helmet
        title={metadata.title}
        link={metadata.links}
        meta={metadata.metadatas}
      />
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
  width: 100%;
  max-width: 1000px;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  padding: 5px;
`;

export default Services;
