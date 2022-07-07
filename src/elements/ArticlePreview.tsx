import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import Link from "next/link";

import Flex from "./Flex";

import { GetModules_modules } from "../graphql/__generated__/GetModules";

const ArticlePreview: React.FC<{ article: GetModules_modules }> = ({
  article,
}) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/media/${article.mediaId}`;

  return (
    <StyledArticlePreview>
      <Link
        key={article.id}
        href="/articles/[id]"
        as={`/articles/${article.id}`}
      >
        <Flex width="200px" flexDirection="column">
          <ImageBox>
            <StyledPicture src={image} alt={article.title} />
          </ImageBox>
          <ArticleTitle>
            <Text fontWeight="bold" fontSize="14px">
              {article.title}
            </Text>
          </ArticleTitle>

          <Text fontWeight="medium" variant="" fontSize="10px">
            {article.tag}
          </Text>
          <Text fontSize="12px" margin="6px 6px 6px 0">
            {article.introduction}
          </Text>
        </Flex>
      </Link>
    </StyledArticlePreview>
  );
};

const StyledArticlePreview = styled.div`
  margin: 20px;
  height: 240px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  height: 120px;
`;

const ArticleTitle = styled.div`
  margin-top: 10px;
  animation: fadeIn linear 7s;

  &:hover {
    color: ${(p) => p.theme.colors.darkGreen};
  }
`;

const StyledPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
    object-fit: fill;
  border-radius: 3px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default ArticlePreview;
