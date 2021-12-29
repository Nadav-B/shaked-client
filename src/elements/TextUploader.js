import styled from '@emotion/styled';

const TextUploader = ({ setState }) => {
  const handleText = async (event) => {
    const fileReader = new FileReader();

    fileReader.onloadend = function (e) {
      console.log(e.target.result);
      setState((prevState) => ({
        ...prevState,
        content: e.target.result,
      }));
    };
    fileReader.readAsText(event.target.files[0]);
    event.target.value = null;
  };
  return (
    <label>
      העלה תוכן ממסמך html
      <StyledInput
        name="content"
        placeholder="שדה חובה"
        type="file"
        accept=".html"
        onChange={handleText}
      />
    </label>
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  font-size: ${(p) => p.theme.fontSize.normal};

  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  bacgkround: silver;
  &::placeholder {
    color: black;
  }
`;

export default TextUploader;