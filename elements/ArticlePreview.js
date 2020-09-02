import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
const ArticlePreview = React.forwardRef(({ article, onClick, href }, ref) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/articles/article/image/${article.id}`;

  return (
    <StyledArticlePreview>
      <a href={href} onClick={onClick} ref={ref}>
        <Wrapper>
          <StyledPicture>
            <img src={image} alt="" />
          </StyledPicture>
          <Text variant="large" margin="4px" fontSize="19px">
            {" "}
            {article.title}{" "}
          </Text>
          <Text margin="6px"> {article.introduction} </Text>
        </Wrapper>
      </a>
    </StyledArticlePreview>
  );
});

const StyledArticlePreview = styled.div`
  display: flex;
  margin: 10px;
  width: auto;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 300px;

  *:hover {
    background: ${(p) => p.theme.colors.lightGrey};
    color: ${(p) => p.theme.colors.navyBlue};
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
  }
`;

const StyledPicture = styled.picture`
  display: block;
  height: 200px;
  width: inherit;
  margin: auto;

  img {
    height: inherit;
    object-fit: fill;
  }
`;
const Wrapper = styled.div`
  margin: auto;
  display: block;
  
  height: 100%;
  max-width: 400px;
`;
export default ArticlePreview;
