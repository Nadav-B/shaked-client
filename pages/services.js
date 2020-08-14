import React from "react";
import axios from "axios";
import Link from "next/link";
import ServicePreview from "../elements/ServicePreview";
import styled from "styled-components";

const Services = ({ data }) => {
  return (
    <div>
      <h1>השירותים שלנו </h1>
      <StyledService>
        {data.map((service, index) => (
          <Link
            key={service.id}
            passHref
            href="/service/[id]"
            as={`/service/${service.id}`}
          >
            <StyledWrapper>
              <ServicePreview index={index} key={service.id} service={service} />
            </StyledWrapper>
          </Link>
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

  const url = `${process.env.NEXT_PUBLIC_API_URL}/services`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}
export default Services;
