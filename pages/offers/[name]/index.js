import React from "react";

import api from "../../../shared/api";
import Button from "../../../elements/Button";
import TextWrapper from "../../../elements/TextWrapper";
import MetadataManager from "../../../components/metadataManager";

import { directByContact } from "../../../config/contactButtonLinks";
import Meta from "../../../components/Meta";

const Offer = ({ data }) => {
  const seo = {
    title: data.title,
    description: data.introduction,
    url: `https://www.shakedm.co.il/offers/${data.id}`,
  };
  const metadata = MetadataManager(seo);

  return (
    <div>
      <Meta
        title={metadata.title}
        link={metadata.links}
        meta={metadata.metadatas}
      />{" "}
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
