import React from "react";
import Loading from "../../elements/Loading";
import ArticlePreview from "../../elements/ArticlePreview";
import { useQuery } from "@apollo/client";
import Meta from "../../components/meta";

import query from "../../graphql/GetModules.graphql";
import Carousel from "../../elements/Carousel";
import Flex from "../../elements/Flex";
import Title from "../../elements/Title";
import Seo from "../../classes/seo";
import { GetModules, GetModulesVariables } from "../../graphql/__generated__/GetModules";
import { ModuleType } from "../../graphql/__generated__/globalTypes";

const seo = new Seo();
seo.title = "כתבות";
seo.description = "הכתבות הבאות יעזרו לכם לקבל מידע על הנושאים הפיננסים";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles`;

const Articles = ({ disableMetadata }) => {
  const { data, loading, error } = useQuery<GetModules, GetModulesVariables>(
    query,
    {
      variables: { where: { type: ModuleType.ARTICLE } },
    }
  );

  if (loading)
    return (
      <>
        {!disableMetadata && <Meta seo={seo} />}
        <Loading />
      </>
    );
  if (error) return <span></span>;

  return (
    <Flex marginTop="30px" alignItems="center" flexDirection="column">
      {!disableMetadata && <Meta seo={seo} />}
      <Title>כתבות</Title>

      <Carousel
        items={data?.modules.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      ></Carousel>
    </Flex>
  );
};

export default Articles;
