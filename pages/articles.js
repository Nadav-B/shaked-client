import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import api from "../shared/api";
import Title from "../elements/Title";

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
      <Title>כתבות</Title>
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

  const res = await api.getArticles();
  const data = res.data;
  // Pass data to the page via props
  return { props: { data } };
}
export default Articles;
