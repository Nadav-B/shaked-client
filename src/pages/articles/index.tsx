import React from "react";
import styled from "@emotion/styled";
import Loading from "../../elements/Loading";
import ArticlePreview from "../../elements/ArticlePreview";
import { useQuery } from "@apollo/client";
import Meta from "../../components/Meta";
import Wrapper from "../../elements/Wrapper";

import { GetArticles } from "../../graphql/__generated__/GetArticles";

import query from "../../graphql/GetArticles.graphql";
import Carousel from "../../elements/Carousel";
import Flex from "../../elements/Flex";
import Title from "../../elements/Title";

const seo = {
  title: "כתבות",
  description: "הכתבות הבאות יעזרו לכם לקבל מידע על הנושאים הפיננסים",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles`,
};

const Articles = ({ disableMetadata }) => {
  const { data, loading, error } = useQuery<GetArticles>(query);

  if (loading)
    return (
      <>
        {!disableMetadata && <Meta seo={seo} />}
        <Loading />
      </>
    );
  if (error) return <span></span>;

  return (
    <Wrapper>
      {!disableMetadata && <Meta seo={seo} />}
      <Title>כתבות</Title>

      <Carousel
        items={data?.getArticles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      ></Carousel>
    </Wrapper>
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
`;

export default Articles;
