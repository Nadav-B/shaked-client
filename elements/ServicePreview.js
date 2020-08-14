import React from "react";
import styled from "styled-components";
import Card from "../elements/Card";
const ServicePreview = React.forwardRef(
  ({ index, service, onClick, href }, ref) => {
    const numbers = [
      "4929829706015130",
      "6011349941535234",
      "371874436422918",
      "6396393304780891",
      "5500831634615910",
      "3535753443328218",
    ];
    return (
      <StyledServicePreview>
        <div class="container">
          <a href={href} onClick={onClick} ref={ref}>
            <Card
              number={numbers[index]}
              name={service.title}
              expiry={""}
              cvc={"445"}
            />
            <div class="overlay">
              <div class="text">{service.introduction}</div>
            </div>
          </a>

        </div>
      </StyledServicePreview>
    );
  }
);

const StyledServicePreview = styled.div`
  .container {
    position: relative;
    width: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: ${p => p.theme.colors.navyBlue};
    text-align: right;
    border-radius: 14.5px;
  }

  .container:hover .overlay {
    opacity: 1;
  }

  .text {
    color: white;
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export default ServicePreview;
