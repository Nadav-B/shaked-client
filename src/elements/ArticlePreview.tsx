import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import Link from "next/link";
import {
  GetArticles,
} from "../graphql/__generated__/GetArticles";
import Flex from "./Flex";
import {GetArticle_article} from "../graphql/__generated__/GetArticle";

const ArticlePreview: React.FC<{ article: GetArticle_article }> = ({
  article,
}) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${article.id}`;

  return (
    <StyledArticlePreview>
      <Link
        key={article.id}
        href="/articles/[id]"
        as={`/articles/${article.id}`}
      >
        <a>
          <Flex width="200px" flexDirection="column">
            <StyledPicture src={image} alt={article.title} />
            <TitleContainer>
              <Text fontWeight="bold" color="darkGreen" margin="2px 6px 0 0" fontSize="14px">
                {article.title}
              </Text>
            </TitleContainer>

            <TitleContainer>
              <Text fontWeight="medium" variant="" fontSize="10px">
                {article.tag}
              </Text>
            </TitleContainer>
            <TitleContainer>
              <Text fontSize="12px" margin="6px 6px 6px 0">
                {article.introduction}
              </Text>
            </TitleContainer>
          </Flex>
        </a>
      </Link>
    </StyledArticlePreview>
  );
};

const StyledArticlePreview = styled.div`
  margin: 20px;
  height: 240px;
  background: white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  *:hover {
    background: ${(p) => p.theme.colors.lightGrey};
    color: ${(p) => p.theme.colors.navyBlue};
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
  }
`;

const TitleContainer = styled.div`
  display: block;
  min-height: 20px;
  margin-right: 20px;
  margin-left: 20px;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    margin-right: 5px;
    margin-left: 5px;
  }
`;
const StyledPicture = styled.img`
  display: block;
  width: 100%;
  max-height: 300px;
`;

export default ArticlePreview;
