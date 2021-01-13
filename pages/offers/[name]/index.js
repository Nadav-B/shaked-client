import React from "react";
import Head from "next/head";
import api from "../../../shared/api";
import Button from "../../../elements/Button";
import TextWrapper from "../../../elements/TextWrapper";
import SEO from "../../../components/seo";

import { directByContact } from "../../../config/contactButtonLinks";
const Offer = ({ data }) => {
  const seo = {
    title: data.title,
    description: data.introduction,
  };

  return (
    <div>
      <Head>
        <SEO seo={seo} />
      </Head>

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
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  const name = query.name;

  // Fetch data from external API

  const res = await api.getOfferByPath(name);
  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Offer;
