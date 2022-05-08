import React from "react";
import Loading from "../../elements/Loading";
import ArticlePreview from "../../elements/ArticlePreview";
import {useQuery} from "@apollo/client";
import Meta from "../../components/Meta";

import {GetArticles} from "../../graphql/__generated__/GetArticles";

import query from "../../graphql/GetArticles.graphql";
import Carousel from "../../elements/Carousel";
import Flex from "../../elements/Flex";
import Title from "../../elements/Title";
import Seo from "../../classes/seo";

const seo = new Seo();
seo.title = "כתבות";
seo.description = "הכתבות הבאות יעזרו לכם לקבל מידע על הנושאים הפיננסים";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles`;

const Articles = ({disableMetadata}) => {
    const {data, loading, error} = useQuery<GetArticles>(query);

    if (loading)
        return (
            <>
                {!disableMetadata && <Meta seo={seo}/>}
                <Loading/>
            </>
        );
    if (error) return <span></span>;

    return (
        <Flex alignItems="center" flexDirection="column">
            {!disableMetadata && <Meta seo={seo}/>}
            <Title>כתבות</Title>

            <Carousel
                items={data?.articles.map((article) => (
                    <ArticlePreview key={article.id} article={article}/>
                ))}
            ></Carousel>
        </Flex>
    );
};

export default Articles;
