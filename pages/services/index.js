import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import Loading from "../../elements/Loading";
import { JSONLD, Product } from "react-structured-data";
import SERVICES_QUERY from "../../graphql/services.query";
import Meta from "../../components/Meta";
import Wrapper from "../../elements/Wrapper";

const seo = {
  title: "השירותים שלנו",
  description:
    "מחזור משכנתא, בדיקה למשכנתא, איחוד הלוואות,  נפרדים מהמינוס, משכנתא חדשה",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services`,
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
    <Wrapper>
      {!disableMetadata && <Meta seo={seo} />}
      <h1>השירותים שלנו</h1>
      <StyledService>
        {data.getServices.map((service, index) => (
          <div key={service.id}>
            <JSONLD>
              <Product name={service.title} description={service.introduction}></Product>
            </JSONLD>
            <StyledWrapper>
              <Link
                passHref
                href="/services/[id]"
                as={`/services/${service.id}`}
              >
                <ServicePreview
                  index={index}
                  key={service.id}
                  service={service}
                />
              </Link>
            </StyledWrapper>
          </div>
        ))}
      </StyledService>
    </Wrapper>
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
