import React from "react";
import api from "../../../shared/api";
import styled from "styled-components";

import Button from "../../../elements/Button";
import { directByContact } from "../../../config/contactButtonLinks";
import TextWrapper from "../../../elements/TextWrapper";

import Meta from "../../../components/Meta";
import Wrapper from "../../../elements/Wrapper";

const Service = ({ data }) => {
  const seo = {
    title: data.title,
    description: data.introduction,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${data.id}`,
  };

  return (
    <Wrapper>
      <Meta seo={seo} />
      <TextWrapper
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></TextWrapper>
      <Button
        onClick={() => {
          directByContact(data.contactButton);
        }}
      >
        {data.contactButton}
      </Button>
    </Wrapper>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  const id = query.id;
  // Fetch data from external API
  const res = await api.getService(id);
  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Service;
