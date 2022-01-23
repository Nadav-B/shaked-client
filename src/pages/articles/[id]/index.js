import React from "react";
import api from "../../../shared/api";
import { directByContact } from "../../../config/contactButtonLinks";
import styled from "@emotion/styled";
import Button from "../../../elements/Button";
import TextWrapper from "../../../elements/TextWrapper";
import Flex from "../../../elements/Flex";

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
    <Flex
      marginRight="20px"
      marginLeft="20px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Meta seo={seo} />
      <StyledImage src={image} alt="image" />
      <StyledContent
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
      <Button
        maxWidth={"400px"}
        onClick={() => {
          directByContact(data.contactButton);
        }}
      >
        {data.contactButton}
      </Button>
    </Flex>
  );
};

const StyledImage = styled.img`
  max-width: 700px;
  margin-top: 10px;
`;

const StyledContent = styled.div`
  max-width: 700px;
  margin-top: 10px;

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
