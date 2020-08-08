import React from "react";
import Head from 'next/head'

const Article = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.introduction}></meta>
        <meta property="og:title" content={data.title} key="ogtitle" />
        <meta property="og:description" content={data.introduction} key="ogdesc" />
        <title>{"shaked"}</title>
      </Head>

      <h1>{data.title}</h1>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`/api/articles/article/8`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Article;
