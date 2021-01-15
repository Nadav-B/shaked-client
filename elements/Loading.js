import { RotateCircleLoading } from "react-loadingg";
import styled from "styled-components";
import SEO from "../components/seo";
import Head from "next/head";

const Loading = ({seo}) => {
  return (
    <>
        <Head>
          <SEO seo={seo}></SEO>
        </Head>

      <Wrapper>
        <RotateCircleLoading color="#0a589d" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
`;

export default Loading;
