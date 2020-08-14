import React from "react";
import Head from "next/head";
import axios from "axios";

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
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  const id = query.id

  // Fetch data from external API

  const url = `${process.env.NEXT_PUBLIC_API_URL}/services/service/${id}`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Service;
