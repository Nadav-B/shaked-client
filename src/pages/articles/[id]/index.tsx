import React from "react";
import { directByContact } from "../../../config/contactButtonLinks";
import styled from "@emotion/styled";
import Button from "../../../elements/Button";
import Flex from "../../../elements/Flex";

import { useGetModuleQuery } from "../../../graphql/generated/graphql";
import { useRouter } from "next/router";
import Loading from "../../../elements/Loading";
import Error from "../../../elements/Error";
import Seo from "../../../classes/seo";

const Article = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, loading, error } = useGetModuleQuery({
    variables: { where: { id: String(id) } },
  });

  if (loading) return <Loading />;
  if (error || data?.module == null)
    return <Error description="העמוד המבוקש לא נמצא" />;

  const image = `${process.env.NEXT_PUBLIC_API_URL}/media/${data.module.mediaId}`;
  const seo = new Seo();

  if (data?.module.title) {
    seo.title = data.module.title;
  }

  if (data?.module.introduction) {
    seo.description = data.module.introduction;
  }

  if (data?.module.id) {
    seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles/${data.module.id}`;
  }
  seo.image = image;

  return (
    <Flex
      marginRight="20px"
      marginLeft="20px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <StyledImage src={image} alt="image" />
      <StyledContent
        dangerouslySetInnerHTML={{
          __html: data.module.content,
        }}
      />
      <Button
        maxWidth={"400px"}
        onClick={() => {
          directByContact(data.module?.contactButton);
        }}
      >
        {data.module.contactButton}
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

export default Article;
