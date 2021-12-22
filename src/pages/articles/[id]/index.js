import React from "react";
import api from "../../../shared/api";
import { directByContact } from "../../../config/contactButtonLinks";
import styled from "styled-components";
import Button from "../../../elements/Button";
import TextWrapper from "../../../elements/TextWrapper";

import Meta from "../../../components/Meta";

const Article = ({ data }) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${data.id}`;

  const seo = {
    title: data.title,
    description: data.introduction,
    image: image,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles/${data.id}`,
  };

  return (
    <div>
      <Meta seo={seo} />
      <TextWrapper>
        <StyledImage src={image} alt="image" />
        <div
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        ></div>
        <Button
          onClick={() => {
            directByContact(data.contactButton);
          }}
        >
          {data.contactButton}
        </Button>
      </TextWrapper>
    </div>
  );
};



const StyledImage = styled.img`
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: block;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 20px;
  width: 100%;
`;

// This gets called on every request
export async function getServerSideProps({ query }) {
  const id = query.id;

  // Fetch data from external API

  const res = await api.getArticle(id);

  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Article;
