import React from "react";
import { directByContact } from "../../../config/contactButtonLinks";
import styled from "@emotion/styled";
import Button from "../../../elements/Button";
import Flex from "../../../elements/Flex";

import Meta from "../../../components/meta";
import { useQuery } from "@apollo/client";
import {
  GetModule,
  GetModuleVariables,
} from "../../../graphql/__generated__/GetModule";
import query from "../../../graphql/GetModule.graphql";
import { useRouter } from "next/router";
import Loading from "../../../elements/Loading";
import Error from "../../../elements/Error";
import Seo from "../../../classes/seo";

const Article = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, loading, error } = useQuery<GetModule, GetModuleVariables>(
    query,
    {
      variables: { where: { id: String(id) } },
    }
  );

  if (loading) return <Loading />;
  if (error || data.module == null)
    return <Error errorDescription={undefined} />;

  const image = `${process.env.NEXT_PUBLIC_API_URL}/media/${data.module.mediaId}`;
  const seo = new Seo();
  seo.title = data.module.title;
  seo.description = data.module.introduction;
  seo.image = image;
  seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles/${data.module.id}`;

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
          __html: data.module.content,
        }}
      />
      <Button
        maxWidth={"400px"}
        onClick={() => {
          directByContact(data.module.contactButton);
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
