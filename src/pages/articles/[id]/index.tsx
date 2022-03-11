import React from "react";
import {directByContact} from "../../../config/contactButtonLinks";
import styled from "@emotion/styled";
import Button from "../../../elements/Button";
import Flex from "../../../elements/Flex";

import Meta from "../../../components/Meta";
import {useQuery} from "@apollo/client";
import {GetArticle, GetArticleVariables} from "../../../graphql/__generated__/GetArticle";
import query from "../../../graphql/GetArticle.graphql";
import {useRouter} from "next/router";
import Loading from "../../../elements/Loading";
import Error from "../../../elements/Error";

const Article = () => {
    const router = useRouter()
    const id = router.query.id;

    const {data, loading, error} = useQuery<GetArticle, GetArticleVariables>(query, {
        variables: {id: id},
    });

    if (loading) return (<Loading/>);
    if (error || data.article==null) return (<Error errorDescription={undefined}/>);

    const image = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${id}`;
    const seo = {
        title: data.article.title,
        description: data.article.introduction,
        image: image,
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles/${data.article.id}`,
    };

    return (
        <Flex
            marginRight="20px"
            marginLeft="20px"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Meta seo={seo}/>
            <StyledImage src={image} alt="image"/>
            <StyledContent
                dangerouslySetInnerHTML={{
                    __html: data.article.content,
                }}
            />
            <Button
                maxWidth={"400px"}
                onClick={() => {
                    directByContact(data.article.contactButton);
                }}
            >
                {data.article.contactButton}
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
