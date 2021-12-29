import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from '@emotion/styled';
import { useQuery } from "@apollo/client";
import Loading from "../../elements/Loading";
import Meta from "../../components/Meta";
import Wrapper from "../../elements/Wrapper";


import {GetServices} from "../../graphql/__generated__/GetServices";
import query from '../../graphql/GetServices.graphql';

const seo = {
  title: "השירותים שלנו",
  description:
    "מחזור משכנתא, בדיקה למשכנתא, איחוד הלוואות,  נפרדים מהמינוס, משכנתא חדשה",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services`,
};


  const Services: React.FC<{ disableMetadata: boolean }> = ({
    disableMetadata,
  }) => {
    const { data, loading, error } = useQuery<GetServices>(query);


  if (loading)
    return (
      <>
        {!disableMetadata && <Meta seo={seo} />}
        <Loading />
      </>
    );
  if (error) return <span></span>;
  return (
    <Wrapper>
      {!disableMetadata && <Meta seo={seo} />}
      <h1>השירותים שלנו</h1>
      <StyledService>
        {data?.getServices.map((service, index) => (
          
          <div key={service.id}>

            <StyledWrapper>
              <Link
                passHref
                href="/services/[id]"
                as={`/services/${service.id}`}
              >
                <ServicePreview
                  index={index}
                  key={service.id}
                  service={service}
                />
              </Link>
            </StyledWrapper>
          </div>
        ))}
      </StyledService>
    </Wrapper>
  );
};

const StyledService = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  padding: 5px;
`;


export default Services;