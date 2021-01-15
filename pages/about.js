import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import TEXTS_QUERY from "../graphql/texts.query";
import Loading from "../elements/Loading";
import TextWrapper from "../elements/TextWrapper";
import MetadataManager from "../components/metadataManager";
import { Helmet } from "react-helmet";

const seo = {
  title: " שקד משכנתאות",
  url: "https://shakedm.co.il/about",
};

const metadata = new MetadataManager(seo);

const About = () => {
  const { data, loading, error } = useQuery(TEXTS_QUERY);
  if (loading) return <Loading />;
  if (error) return <span></span>;

  return (
    <Wrapper>
      <Helmet link={metadata.getLinks()} meta={metadata.getMetadatas()} />
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
