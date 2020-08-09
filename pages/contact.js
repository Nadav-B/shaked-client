import React, { useState } from "react"
import styled from "@emotion/styled"
import Button from "../elements/Button"
import Input from "../elements/Input"

const Contact = ({ data, onChange = () => {}, onKeyDown = () => {} }) => {
  const [state, setState] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
  })

  const handleChange = event => {
    event.preventDefault()
    const target = event.target
    const value = target.value
    const name = target.name
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <label>
            שם מלא
            <Input
              name="fullname"
              value={state.fullname}
              placeholder="שדה חובה"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            מספר טלפון
            <Input
              name="phonenumber"
              placeholder="שדה חובה"
              value={state.phonenumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            דוא״ל
            <Input
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <label>
            ישוב
            <Input
              name="address"
              value={state.address}
              onChange={handleChange}
            />
          </label>
          <Button type="submit">שלח </Button>
        </form>
      </StyledForm>
  )
}

const StyledForm = styled.div`
  display: flex;
  max-width: 340px;
`

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

export default Contact
