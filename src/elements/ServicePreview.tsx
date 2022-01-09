import Link from "next/link";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import styled from "@emotion/styled";
import { GetServices_getServices } from "../graphql/__generated__/GetServices";

const ServicePreview: React.FC<{
  service: GetServices_getServices;
  index: Number;
}> = ({ service, index }) => {
  const [overlay, setOverlay] = useState(false);
  const someHandler = () => {
    setOverlay(!overlay);
  };

  return (
    <Link key={service.id} href="/services/[id]" as={`/services/${service.id}`}>
      <div className="container">
        <StyledCube
          onMouseLeave={() => setOverlay(false)}
          onMouseEnter={() => setOverlay(true)}
        >
          {!overlay && (
            <StyledFront>
              <img src={`/services/${index}.svg`} alt="service-icon" />
              <div className="text">{service.title}</div>
            </StyledFront>
          )}

          {overlay && (
            <StyledBack>
              <img src={`/services/${index}.svg`} alt="service-icon" />
              <div>{service.title}</div>
              <p> {service.introduction}</p>

              <p>  {"+"} לפרטים נוספים</p>
            </StyledBack>
          )}
        </StyledCube>
      </div>
    </Link>
  );
};

const StyledCube = styled.div`
  width: 160px;
  height: 180px;
  cursor: pointer;
  background: #0a589d14;
  margin: 15px;
`;

const StyledFront = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;

  img {
    border-radius: 40px;
    padding: 10px;
    margin: 10px;
    max-width: 80px;
  }
`;

const StyledBack = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: column;
  color: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  transition: 0.5s ease;

  img {
    width: 20px;
  }

}
`;

export default ServicePreview;
