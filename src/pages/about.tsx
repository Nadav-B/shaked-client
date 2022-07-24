import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import Loading from "../elements/Loading";
import TextWrapper from "../elements/TextWrapper";

import Wrapper from "../elements/Wrapper";

import Seo from "../classes/seo";

import {
  ModuleType,
  useGetModulesWithContentQuery,
} from "src/graphql/generated/graphql";

const seo = new Seo();

seo.title = "אודות";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`;

const About = ({ disableMetadata }) => {
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
      <TextWrapper>
        {data?.modules?.map((text) => (
          <div
            key={text?.id}
            dangerouslySetInnerHTML={{
              __html: String(text?.content),
            }}
          ></div>
        ))}
      </TextWrapper>
    </Wrapper>
  );
};

export default About;
