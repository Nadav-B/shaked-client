import React from "react";
import styled from 'styled-components'
import Text from "../elements/Text";
import Card from "../elements/Card"
const ServicePreview = React.forwardRef(({ service, onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
            <Card
              number={""}
              name={service.title }
              expiry={""}
              cvc={""}
              focused={true}
            />
    </a>
  );
});

export default ServicePreview;
