import styled from "@emotion/styled";
import * as React from "react";
import { TypographyProps, typography } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

const StyledTitle = styled("h2", { shouldForwardProp })<TypographyProps>(
  {
    color: "black",
    fontWeight: "bold",
    fontSize: "21px",
    margin: 0,
    marginBottom: "4px",
  },

  typography
);

export default StyledTitle;
