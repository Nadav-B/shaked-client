import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import Loading from "../elements/Loading";
import TextWrapper from "../elements/TextWrapper";

import Meta from "../components/meta";
import Wrapper from "../elements/Wrapper";

import query from "../graphql/GetModulesWithContent.graphql";
import Seo from "../classes/seo";
import {
  GetModules,
  GetModulesVariables,
} from "../graphql/__generated__/GetModules";
import { ModuleType } from "../graphql/__generated__/globalTypes";
import { GetModulesWithContent } from "../graphql/__generated__/GetModulesWithContent";

const seo = new Seo();

seo.title = "אודות";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`;

const About = ({ disableMetadata }) => {
  const { data, loading, error } = useQuery<GetModulesWithContent, GetModulesVariables>(
    query,
    {
      variables: { where: { type: ModuleType.INTRODUCTION } },
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
    <Wrapper>
      {!disableMetadata && <Meta seo={seo} />}
      <TextWrapper>
        {data?.modules.map((text) => (
          <div
            key={text.id}
            dangerouslySetInnerHTML={{
              __html: text.content,
            }}
          ></div>
        ))}
      </TextWrapper>
    </Wrapper>
  );
};

export default About;
