import React from "react";
import { Helmet } from "react-helmet";
import api from "../../../shared/api";
import Button from "../../../elements/Button";
import TextWrapper from "../../../elements/TextWrapper";

import { directByContact } from "../../../config/contactButtonLinks";

const metadata = new MetadataManager(seo);

const Offer = ({ data }) => {
  const seo = {
    title: data.title,
    description: data.introduction,
    url: `https://shakedm.co.il/offers/${data.id}`,
  };
  const metadata = new MetadataManager(seo);


  return (
    <div>
      <Helmet link={metadata.getLinks()} meta={metadata.getMetadatas()} />
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
