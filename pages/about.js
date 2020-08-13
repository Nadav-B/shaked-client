import React from "react";
import axios from "axios";

const About = ({ data }) => {
  return (
    <div>
      {data.map((text) => (
        <div
          dangerouslySetInnerHTML={{
            __html: text.content,
          }}
        ></div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API

  const url = `${process.env.API_URL}/texts`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default About;
