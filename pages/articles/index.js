import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Loading from "../../elements/Loading";
import ARTICLES_QUERY from "../../graphql/articles.query";

import ArticlePreview from "../../elements/ArticlePreview";
import { useQuery } from "@apollo/react-hooks";
import Meta from "../../components/Meta";

const seo = {
  title: "כתבות",
  description: "הכתבות הבאות יעזרו לכם לקבל מידע על הנושאים הפיננסים",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles`,
};

const Articles = ({ disableMetadata }) => {
  const { data, loading, error } = useQuery(ARTICLES_QUERY);

  if (loading)
    return (
      <>
        {!disableMetadata && <Meta seo={seo} />}
        <Loading />
      </>
    );
  if (error) return <span></span>;

  return (
    <div>
      {!disableMetadata && <Meta seo={seo} />}
      <h1>כתבות</h1>
      <StyledArticles>
        {data.getArticles.map((article) => (
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
