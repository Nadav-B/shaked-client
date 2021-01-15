import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import TEXTS_QUERY from "../graphql/texts.query";
import Loading from "../elements/Loading";
import TextWrapper from "../elements/TextWrapper";

const seo = {
  title: " שקד משכנתאות",
};

const About = () => {

  const { data, loading, error } = useQuery(TEXTS_QUERY);
  if (loading) return <Loading seo={seo}></Loading>;
  if (error) return <span></span>;

  return (
    <Wrapper>
      <Head>
        <meta name="description" content=" אודות" />
        <meta property="og:description" content="אודות " key="ogdesc" />
      </Head>
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
