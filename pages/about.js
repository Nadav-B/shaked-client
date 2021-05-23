import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import TEXTS_QUERY from "../graphql/texts.query";
import Loading from "../elements/Loading";
import TextWrapper from "../elements/TextWrapper";

import Meta from "../components/Meta";
import Wrapper from "../elements/Wrapper";

const seo = {
  title: "אודות",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`,
};

const About = ({ disableMetadata }) => {
  const { data, loading, error } = useQuery(TEXTS_QUERY);
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
        {data.getTexts.map((text) => (
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
