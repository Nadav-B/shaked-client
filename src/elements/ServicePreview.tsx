import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

import styled from '@emotion/styled';
import { GetServices_getServices } from "../graphql/__generated__/GetServices";



    const ServicePreview: React.FC<{service:GetServices_getServices,index:Number }> = ({
      service,index
    }) => {

      

    return (
        <StyledServicePreview>
        <Link
        key={service.id}
        href="/services/[id]"
        as={`/services/${service.id}`}
      >
          <div className="container">
            <StyledCube>
              <div className="front">
                <Fade>
                  <img src={`/services/${index}.svg`} alt="service-icon" />
                </Fade>
                <div className="text">{service.title}</div>
              </div>
              <div className="overlay">
                <img src={`/services/${index}.svg`} alt="service-icon" />
                <div className="text">{service.title}</div>
                <p> {service.introduction}</p>
                <p> פרטים נוספים</p>
                <img src="/assets/play.svg" alt="goto" />
              </div>
            </StyledCube>
          </div>
          </Link>

        </StyledServicePreview>
    );
  
};

const StyledServicePreview = styled.div`
  .container {
    position: relative;
  }
  cursor: pointer;

  border-radius: ${(p) => p.theme.border}px;

  .front {

    img {
      background: white;
      border-radius: 40px;
      padding: 10px;
      margin: 10px;
      width: 80px;
    }
  }

  @media only screen and (hover: hover) {
    .container:hover .overlay {
      opacity: 1;
    }
  }
  .overlay {
    position: absolute;
    opacity: 0;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    color: black;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    transition: 0.5s ease;
    border: 1px solid ${(p) => p.theme.colors.navyBlue};
    border-radius: ${(p) => p.theme.border}px;
    background-color: ${(p) => p.theme.colors.white};

    img {
      display: block;
      width: 20px;
      padding-left: 5px;
    }

    .text {
      color: ${(p) => p.theme.colors.navyBlue};
    }

    p {
      text-align: right;
      margin-left: 10px;
      margin-right: 10px;
      font-size: 12px;
    }
  }
`;

const StyledCube = styled.div`
  border-radius: ${(p) => p.theme.border}px;

  display: flex;
  width: 160px;
  height: 180px;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default ServicePreview;
