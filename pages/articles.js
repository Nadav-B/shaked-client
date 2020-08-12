import React from "react";
import axios from "axios";
import Link from "next/link";
import ArticlePreview from "../elements/ArticlePreview"

const Articles = ({ data }) => {
  return (
    <div>

      {data.map((article) => (
        <Link  key={article.id} passHref href="/article/[id]" as={`/article/${article.id}`}>
          <ArticlePreview key={article.id} article={article} />
        </Link>
      ))}
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const url = `${process.env.API_URL}/articles`;
  const res = await axios.get(url);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}
export default Articles;
