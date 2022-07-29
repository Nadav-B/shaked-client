import React from "react";
import Loading from "../elements/Loading";

import Seo from "../classes/seo";

import {
  ModuleType,
  useGetModulesWithContentQuery,
} from "src/graphql/generated/graphql";
import Flex from "src/elements/Flex";
import styled from "@emotion/styled";

const seo = new Seo();

seo.title = "אודות";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`;

const About = () => {
  const { data, loading, error } = useGetModulesWithContentQuery({
    variables: { where: { type: ModuleType.Introduction } },
  });

  if (loading) return <Loading />;
  if (error) return <span></span>;

  return (
    <Flex justifyContent=" center" alignItems="center" margin="auto">
      <Flex
        maxWidth="700px"
        flexDirection="column"
        alignItems="center"
        margin="30px"
      >
        {data?.modules?.map((text) => (
          <StyledContent
            key={text?.id}
            dangerouslySetInnerHTML={{
              __html: String(text?.content),
            }}
          ></StyledContent>
        ))}
      </Flex>
    </Flex>
  );
};

const StyledContent = styled.div`
  h1,
  h2 {
    text-align: center;
    color: "black";
  }
`;
export default About;
