import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import Title from "../../elements/Title";
import Loading from "../../elements/Loading";
import ARTICLES_QUERY from '../../graphql/articles.query';

import ArticlePreview from "../../elements/ArticlePreview";
import { useQuery } from "@apollo/react-hooks";

const Articles = () => {

  const { data, loading, error } = useQuery(ARTICLES_QUERY);
  if (loading) return <Loading/>
  if (error) return <span></span>;

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
        { data.getArticles.map((article) => (
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
  max-width: 1400px;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 40px;
`;

export default Articles;
