import React from "react";
import Link from "next/link";
import ServicePreview from "../../elements/ServicePreview";
import styled from "@emotion/styled";
import {useQuery} from "@apollo/client";
import Loading from "../../elements/Loading";
import Meta from "../../components/Meta";
import Wrapper from "../../elements/Wrapper";

import {GetServices, GetServices_getServices} from "../../graphql/__generated__/GetServices";
import query from "../../graphql/GetServices.graphql";
import Title from "../../elements/Title";
import Flex from "../../elements/Flex";

const seo = {
    title: "השירותים שלנו",
    description:
        "מחזור משכנתא, בדיקה למשכנתא, איחוד הלוואות,  נפרדים מהמינוס, משכנתא חדשה",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services`,
};


interface ServicesOption {
    disableMetadata: boolean
    backSide?: boolean
    handleClick?: any
}


const Services: React.FC<ServicesOption> = ({
                                                disableMetadata,
                                                handleClick,
                                                backSide
                                            }) => {
    const {data, loading, error} = useQuery<GetServices>(query);

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
            <Title>השירותים שלנו</Title>
            <StyledService>
                {data?.getServices.map((service, index) => (
                    <ServicePreview backSide={backSide} index={index} key={service.id}
                                    service={service}/>
                ))}
            </StyledService>
        </Flex>
    );
};

const StyledService = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Services;
