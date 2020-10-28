import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from "styled-components";
import Head from "next/head";
import SERVICES_QUERY from '../../graphql/services.query';
import { useQuery } from "@apollo/react-hooks";
import Title from "../../elements/Title";
import Loading from "../../elements/Loading";

const Services = () => {

  const { data, loading, error } = useQuery(SERVICES_QUERY);
  if (loading) return <Loading/>
  if (error) return <p>קימת שגיאה בטעינת שירותי המשרד ... </p>;
  return (
    
    <div>
      <Head>
        <meta name="description" content=" השירותים שלנו "></meta>
        <meta
          property="og:description"
          content="השירותים שלנו  "
          key="ogdesc"
        />
      </Head>
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  padding: 5px;
`;


export default Services;
