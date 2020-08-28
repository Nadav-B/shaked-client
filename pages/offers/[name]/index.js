import React from "react";
import Head from "next/head";
import axios from "axios";
import api from "../../../shared/api";
import Button from "../../../elements/Button";
import { directByContact } from "../../../config/contactButtonLinks";
const Service = ({ data }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.introduction}></meta>
        <meta property="og:title" content={data.title} key="ogtitle" />

        <meta
          property="og:description"
          content={data.introduction}
          key="ogdesc"
        />
        <title>{"shaked"}</title>
      </Head>

      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></div>
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

  const res = await api.getService(13);
  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Service;
