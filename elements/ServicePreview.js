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
      <a href={href} onClick={onClick} ref={ref}>
        <Card
          number={numbers[index]}
          name={service.title}
          expiry={""}
          cvc={""}
          focused={true}
        />
      </a>
    );
  }
);


export default ServicePreview;
