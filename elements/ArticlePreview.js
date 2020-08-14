import React from "react";
import styled from 'styled-components'
import Text from "../elements/Text";
const ArticlePreview = React.forwardRef(({ article, onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <StyledArticlePreview>
        <Wrapper>
          <StyledPicture>
            <img
              src={
                "https://shakedm.co.il/api/articles/article/image/" + article.id
              }
              alt=""
            />
          </StyledPicture>
          <Text margin="4px" fontSize="19px">
            {" "}
            {article.title}{" "}
          </Text>
          <Text margin="6px"> {article.introduction} </Text>
        </Wrapper>
      </StyledArticlePreview>
    </a>
  );
});

const StyledArticlePreview = styled.div`
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 400px;
  min-height: 300px;
`;

const StyledPicture = styled.picture`
  display: block;
  height: 200px;
  width: inherit;
  margin: auto;
  border-top-left-radius: 1%;
  border-top-right-radius: 1%;

  img {
    height: inherit;
    object-fit: fill;
  }
`;
const Wrapper = styled.div`
  margin: auto;
  display: block;
  height: 100%;
`;
export default ArticlePreview;
