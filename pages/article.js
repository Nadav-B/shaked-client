import React from "react";
import Head from "next/head";
import axios from "axios";
import ArticlePreview from "../elements/ArticlePreview";
import Layout from "../../shaked-web/src/components/layout";

const Article = ({ data }) => {
  const image = `${process.env.API_URL}/articles/article/image/`;

  return (
    <Layout>
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

      <img src={`${image}${data.id}`} alt="" />
      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></div>
      <ArticlePreview data ={data}></ArticlePreview>
    </div>
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const url = `${process.env.API_URL}/articles/article/8`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Article;
