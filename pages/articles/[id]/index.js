import React from "react";
import Head from "next/head";
import axios from "axios";
import styled from "styled-components";

const Article = ({ data }) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${data.id}`;
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
      <StyledArticle>
        <StyledImage src={image} alt="" />
        <div
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        ></div>
      </StyledArticle>
    </div>
  );
};

const StyledArticle = styled.div`
  display: block;
  width: 100%;
  margin: 0;
`;

const StyledImage = styled.img`
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 50%;
`;

// This gets called on every request
export async function getServerSideProps({ query }) {
  const id = query.id;

  // Fetch data from external API

  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/${id}`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Article;
