import React from "react";
import Head from "next/head";
import axios from "axios";
import styled from "styled-components";
import survey1 from "../../../public/surveys/1.json";
import survey2 from "../../../public/surveys/2.json";

const Survey = ({ id }) => {
  var data = [survey1, survey2];
  data = data[id];
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.name}></meta>
        <meta property="og:title" content={data.name} key="ogtitle" />
        <meta property="og:description" content={data.name} key="ogdesc" />
        <title>{"shaked"}</title>
      </Head>
      <h1>{data.name}</h1>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  const id = query.id;
  return { props: { id } };
}

export default Survey;
