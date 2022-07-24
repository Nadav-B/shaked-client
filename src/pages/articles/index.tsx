import React from "react";
import Loading from "../../elements/Loading";
import ArticlePreview from "../../elements/ArticlePreview";

import Carousel from "../../elements/Carousel";
import Flex from "../../elements/Flex";
import Title from "../../elements/Title";
import Seo from "../../classes/seo";
import {
  ModuleType,
  useGetModulesQuery,
} from "../../graphql/generated/graphql";

const seo = new Seo();
seo.title = "כתבות";
seo.description = "הכתבות הבאות יעזרו לכם לקבל מידע על הנושאים הפיננסים";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles`;

const Articles = ({ disableMetadata }) => {
  const { data, loading, error } = useGetModulesQuery({
    variables: { where: { type: ModuleType.Article } },
  });

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <span></span>;

  return (
    <Flex marginTop="30px" alignItems="center" flexDirection="column">
      <Title>כתבות</Title>

      <Carousel
        items={data?.modules?.map((module) => (
          <ArticlePreview key={module?.id} module={module} />
        ))}
      ></Carousel>
    </Flex>
  );
};

export default Articles;
