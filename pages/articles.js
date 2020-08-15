import React from "react";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";

import ArticlePreview from "../elements/ArticlePreview";

const Articles = ({ data }) => {
  return (
    <div>
      <Head>
        <meta name="description" content="כל הכתבות של שקד משכנתאות"></meta>
        <meta
          property="og:description"
          content="כל הכתבות של שקד משכנתאות"
          key="ogdesc"
        />
      </Head>
      <h1>כתבות</h1>
      <StyledArticles>
        {data.map((article) => (
          <Link
            key={article.id}
            passHref
            href="/articles/[id]"
            as={`/articles/${article.id}`}
          >
            <ArticlePreview key={article.id} article={article} />
          </Link>
        ))}
      </StyledArticles>
    </div>
  );
};

const StyledArticles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}
export default Articles;
