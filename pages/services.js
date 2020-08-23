import React from "react";
import axios from "axios";
import Link from "next/link";
import ServicePreview from "../elements/ServicePreview";
import styled from "styled-components";
import Head from "next/head";
import api from "../shared/api";

import Title from "../elements/Title";

const Services = ({ data }) => {
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
        {data.map((service, index) => (
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

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await api.getServices();
  const data = res.data;
  // Pass data to the page via props
  return { props: { data } };
}
export default Services;
