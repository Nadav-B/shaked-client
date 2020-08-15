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
            <img
              src={
                image 
              }
              alt=""
            />
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
  * {
    border-radius: 2%;
  }

  *:hover {
    color: white;
    background: ${(p) => p.theme.colors.navyBlue};
    
  }

  border-radius: 2%;

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
