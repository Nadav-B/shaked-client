import Input from "./Input";
const TextUploader = ({ setState }) => {
  const handleText = async (event) => {
    const fileReader = new FileReader();

    fileReader.onloadend = function(e) {
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
      <Input
        name="content"
        placeholder="שדה חובה"
        type="file"
        accept=".html"
        onChange={handleText}
      />
    </label>
  );
};

export default TextUploader;
