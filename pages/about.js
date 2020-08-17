import React from "react";
import axios from "axios";
import Head from "next/head";

const About = ({ data }) => {
  return (
    <div>
      <Head>
        <meta name="description" content=" אודות" />
        <meta property="og:description" content="אודות " key="ogdesc" />
      </Head>
      <div>
        {data.map((text) => (
          <div
          key ={text.id}
            dangerouslySetInnerHTML={{
              __html: text.content,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API

  const url = `${process.env.NEXT_PUBLIC_API_URL}/texts`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default About;
