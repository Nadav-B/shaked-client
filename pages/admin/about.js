import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../../elements/Button";
import Text from "../../elements/Text";
import api from "../../shared/api";
import TextUploader from "../../elements/TextUploader";
import TextWrapper from "../../elements/TextWrapper";
import { ProtectRoute } from "../../shared/protected_route";

function AboutManager() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const [state, setState] = useState({
    id: "",
    tag: "",
    content: "",
  });

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  useEffect(() => {
    async function getRequestForm() {
      try {
        const response = await api.getTexts();
        setData(response.data);
      } catch {
        setError(true);
      }
    }
    if (!data) getRequestForm();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.postText(state).then(
      (response) => {
        setResult((prevState) => ({
          ...prevState,
          text: "נשלח בהצלחה!",
          style: "sucess",
          status: true,
        }));
      },
      (error) => {
        setResult((prevState) => ({
          ...prevState,
          text: "שגיאה",
          style: "error",
          status: false,
        }));
      }
    );
  };

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteArticle = async () => {
    await api.deleteText(state.id).then(
      (response) => {
        setResult((prevState) => ({
          ...prevState,
          text: "נמחק בהצלחה",
          style: "sucess",
          status: true,
        }));
      },
      (error) => {
        setResult((prevState) => ({
          ...prevState,
          text: "שגיאה",
          style: "error",
          status: false,
        }));
      }
    );
  };

  const handleTextChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const id = target.value;

    setResult({
      text: "",
      style: "",
      status: false,
    });

    if (id) {
      const storedObject = data.find((object) => object.id == id);
      setState({
        id: storedObject.id,
        tag: storedObject.tag,
        content: storedObject.content,
      });
    } else {
      setState({
        id: "",
        tag: "",
        content: "",
      });
    }
  };

  return (
    <ProtectRoute>
      <TextWrapper>
        <h1> ערוך אודות</h1>
        <StyledSelect name="category" onChange={handleTextChange}>
          <option value=""> הוסף טקסט </option>
          {data &&
            data.map((text) => (
              <option key={text.id} value={text.id}>
                {text.tag}
              </option>
            ))}
        </StyledSelect>

        <StyledForm>
          <form onSubmit={handleSubmit}>
            <label>
              שם הטקסט. לא יופיע בעמוד
              <StyledInput
                name="tag"
                value={state.tag}
                placeholder="שדה חובה"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              תוכן כתבה
              <StyledInput
                name="content"
                placeholder="שדה חובה"
                value={state.content}
                onChange={handleChange}
              />
            </label>
            <TextUploader setState={setState} />

            <Text variant={result.style}> {result.text}</Text>
            <Button disabled={result.status} type="submit">
              שלח
            </Button>
            {state.id && (
              <Button
                type="button"
                onClick={() => {
                  deleteArticle();
                }}
              >
                מחק טקסט
              </Button>
            )}
          </form>
        </StyledForm>
      </TextWrapper>
    </ProtectRoute>
  );
}

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  margin: auto;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
`;

const StyledForm = styled.div`
  display: flex;
  margin-top: 100px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(p) => p.theme.fontSize.normal};

  box-sizing: border-box;

  bacgkround: silver;
  &::placeholder {
    color: black;
  }
`;

export default AboutManager;
