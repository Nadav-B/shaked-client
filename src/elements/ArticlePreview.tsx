import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import Link from "next/link";

import Flex from "./Flex";

interface ArticlePreviewProps {
  module: any;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ module }) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/media/${module.mediaId}`;

  return (
    <StyledArticlePreview>
      <Link key={module.id} href="/articles/[id]" as={`/articles/${module.id}`}>
        <Flex width="200px" flexDirection="column">
          <ImageBox>
            <StyledPicture src={image} alt={String(module.title)} />
          </ImageBox>
          <ArticleTitle>
            <Text fontWeight="bold" fontSize="14px">
              {module.title}
            </Text>
          </ArticleTitle>

          <Text fontWeight="medium" fontSize="10px">
            {module.tag}
          </Text>
          <Text fontSize="12px">{module.introduction}</Text>
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
