import Link from "next/link";
import React, {useState} from "react";

import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {GetServices_services} from "../graphql/__generated__/GetServices";

interface ServicePreviewOption {
    backSide?: boolean
    service: GetServices_services
    index: Number,
}

const ServicePreview: React.FC<ServicePreviewOption> = ({
                                                            service,
                                                            index, backSide = true

                                                        }) => {
    const [overlay, setOverlay] = useState(false);
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        if (backSide == false) {
            router.push(`#contact`)
        } else {
            router.push(`/services/${service.id}`)


        }

    }

    const changeOverlayStatus = (mouseOver: boolean) => {
        if (backSide) {
            setOverlay(mouseOver);
        } else {
            setOverlay(false)
        }
    }

    return (
        <StyledCube onClick={handleClick}
                    onMouseOut={() => changeOverlayStatus(false)}
                    onMouseOver={() => changeOverlayStatus(true)}
        >
            {!overlay && (
                <StyledFront>
                    <img src={`/services/${index}.svg`} alt="service-icon"/>
                    <div className="text">{service.title}</div>
                </StyledFront>
            )}

            {overlay && (
                <StyledBack>
                    <img src={`/services/${index}.svg`} alt="service-icon"/>
                    <div>{service.title}</div>
                    <p> {service.introduction}</p>

                    <p>  {"+"} לפרטים נוספים</p>
                </StyledBack>
            )}
        </StyledCube>

    );
};

const StyledCube = styled.div`
  width: 150px;
  height: 170px;
  cursor: pointer;
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
    width: 10px;
  }

}
`;

export default ServicePreview;
