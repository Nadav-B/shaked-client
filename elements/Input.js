import React from "react"
import styled from "@emotion/styled"

const Input = ({ type, required, children, onClick, focus }) => (
  <StyledInput
    type={type}
    required={required}
    onClick={onClick}
    ref={ref => focus && ref && ref.focus()}
  >
    {children}
  </StyledInput>
)

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  bacgkround: silver;
  &::placeholder {
    color: black;
  }
`

export default Input
