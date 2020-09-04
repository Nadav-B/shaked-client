import React from "react";
import Head from "next/head";
import DocumentViewer from "../../../../elements/DocumentViewer";
const Document = ({ data }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.description}></meta>
        <meta property="og:title" content={data.title} key="ogtitle" />

        <meta
          property="og:description"
          content={data.introduction}
          key="ogdesc"
        />
        <title>{"shaked"}</title>
      </Head>

      <DocumentViewer src={data.src}></DocumentViewer>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  const file = query.name;

  // Fetch data from external API
  const data = {
    title: "מסמכים",
    description: "הנחיות להוצאת יתרות מהבנקים",
    src: file,
  };
  // Pass data to the page via props
  return { props: { data } };
}

export default Document;
