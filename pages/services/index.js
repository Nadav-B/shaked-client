import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import Title from "../../elements/Title";
import Loading from "../../elements/Loading";
import { gql } from "@apollo/client";


const seo = {
  title: "השירותים שלנו",
  description: "מחזור משכנתא, בדיקה למשכנתא, איחוד הלוואות,  נפרדים מהמינוס, משכנתא חדשה",
  link: "https://shakedm.co.il/services"
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

const Services = () => {

  const { data, loading, error } = useQuery(SERVICES_QUERY);
  if (loading) return <Loading seo={seo}></Loading>;

   if (error) return <span></span>;
  return (
    <div>
      <Title>השירותים שלנו</Title>
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
