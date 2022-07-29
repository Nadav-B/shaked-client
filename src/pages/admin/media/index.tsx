import { MediaUploader, Title, MediaPicker, Flex } from "../../../elements";

const MediaManager = () => {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Title>ניהול מדיה</Title>
      <MediaPicker></MediaPicker>
      <MediaUploader></MediaUploader>
    </Flex>
  );
};
export default MediaManager;
