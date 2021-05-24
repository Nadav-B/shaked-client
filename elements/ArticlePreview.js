import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Link from "next/link";

const ArticlePreview = React.forwardRef(({ article, onClick, href }, ref) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${article.id}`;

  return (
    <StyledArticlePreview>
      <Link
        key={article.id}
        passHref
        href="/articles/[id]"
        as={`/articles/${article.id}`}
      >
        <a href={href} onClick={onClick} ref={ref}>
          <StyledPicture src={image} alt={article.title} />
          <StyledText>
            <Text variant="title large" margin="4px" fontSize="16px">
              {article.title}
            </Text>
            <Text fontSize="14px" margin="6px">
              {article.introduction}
            </Text>
          </StyledText>
        </a>
      </Link>
    </StyledArticlePreview>
  );
});

const StyledArticlePreview = styled.div`
  margin: 20px;
  width: 400px;
  min-height: 300px;
  border-radius: ${(p) => p.theme.border}px;

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

  @media screen and (max-width: 700px) {
    min-height: 100px;
    width: 100%;
  }
`;

const StyledPicture = styled.img`
  display: block;
  width: 100%;
  height: 65%;
  border-top-left-radius: ${(p) => p.theme.border}px;
  border-top-right-radius: ${(p) => p.theme.border}px;

  @media screen and (max-width: 700px) {
    height: 100%;
    width: 30%;
    border-top-left-radius: 0;
    border-bottom-right-radius: ${(p) => p.theme.border}px;

    float: right;
    object-fit: cover;
  }
`;

const StyledText = styled.div`
  display: block;
  padding: 5px;

  @media screen and (max-width: 700px) {
    display: inline;
    width: 70%;
    float: left;
  }
`;

export default ArticlePreview;
