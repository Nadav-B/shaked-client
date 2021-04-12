import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import TEXTS_QUERY from "../graphql/texts.query";
import Loading from "../elements/Loading";
import TextWrapper from "../elements/TextWrapper";

import Meta from "../components/Meta";

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

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default About;
