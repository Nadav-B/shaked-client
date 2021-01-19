import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Loading from "../../elements/Loading";
import ARTICLES_QUERY from "../../graphql/articles.query";
import { Helmet } from "react-helmet";

import MetadataManager from "../../components/metadataManager";

import ArticlePreview from "../../elements/ArticlePreview";
import { useQuery } from "@apollo/react-hooks";

const seo = {
  title: "כתבות",
  description: "הכתבות הבאות יעזרו לכם לקבל מידע על הנושאים הפיננסים",
  url: "https://www.shakedm.co.il/articles",
};

const Articles = ({ disableMetadata }) => {
  const metadata = new MetadataManager(seo, disableMetadata);
  const { data, loading, error } = useQuery(ARTICLES_QUERY);

  if (loading)
    return (
      <>
        <Helmet
          title={metadata.getTitle()}
          link={metadata.getLinks()}
          meta={metadata.getMetadatas()}
        />
        <Loading />
      </>
    );
  if (error) return <span></span>;

  return (
    <div>
      <Helmet
        title={metadata.getTitle()}
        link={metadata.getLinks()}
        meta={metadata.getMetadatas()}
      />
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
