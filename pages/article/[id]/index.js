import React from "react";
import Head from "next/head";
import axios from "axios";

const Article = ({ data }) => {
  //const image = `${process.env.API_URL}/articles/article/image/`;
  const image = `https://shakedm.co.il/api/articles/article/image/${data.id}`
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.introduction}></meta>
        <meta property="og:title" content={data.title} key="ogtitle" />
        <meta property="og:image" content={image} key="ogimage" />

        <meta
          property="og:description"
          content={data.introduction}
          key="ogdesc"
        />
        <title>{"shaked"}</title>
      </Head>

      <img src={image} alt="" />
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

  const url = `${process.env.API_URL}/articles/article/${id}`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Article;
