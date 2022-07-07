import Flex from "../../../elements/Flex";
import MediaPicker from "../../../elements/MediaPicker";
import MediaUploader from "../../../elements/MediaUploader";
import Title from "../../../elements/Title";

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
