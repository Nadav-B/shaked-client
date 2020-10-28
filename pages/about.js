import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import TEXTS_QUERY from '../graphql/texts.query';
import Loading from "../elements/Loading";

const About = () => {

  const { data, loading, error } = useQuery(TEXTS_QUERY);
  if (loading) return <Loading/>

  if (error) return <p>קימת שגיאה בשרת ... </p>;

  return (
    <Wrapper>
      <Head>
        <meta name="description" content=" אודות" />
        <meta property="og:description" content="אודות " key="ogdesc" />
      </Head>
      <div>
        {data.getTexts.map((text) => (
          <div
            key={text.id}
            dangerouslySetInnerHTML={{
              __html: text.content,
            }}
          ></div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

export default About;
