import React from "react";
import Loading from "../elements/Loading";

import Wrapper from "../elements/Wrapper";

import Seo from "../classes/seo";

import {
  ModuleType,
  useGetModulesWithContentQuery,
} from "src/graphql/generated/graphql";
import Flex from "src/elements/Flex";

const seo = new Seo();

seo.title = "אודות";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`;

const About = () => {
  const { data, loading, error } = useGetModulesWithContentQuery({
    variables: { where: { type: ModuleType.Introduction } },
  });

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <span></span>;

  return (
    <Wrapper>
      <Flex
        flexDirection="row"
        alignItems="center"
        maxWidth="700px"
        margin="20px"
      >
        {data?.modules?.map((text) => (
          <div
            key={text?.id}
            dangerouslySetInnerHTML={{
              __html: String(text?.content),
            }}
          ></div>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default About;
