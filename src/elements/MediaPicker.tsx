import React, { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import styled from "@emotion/styled";
import Flex from "./Flex";
import Carousel from "./Carousel";
import { useGetMediaQuery } from "src/graphql/generated/graphql";

interface MediaPickerProps {
  mediaId?: number;
  handleChange?: Function;
}

const MediaPicker: React.FC<MediaPickerProps> = ({
  mediaId,
  handleChange = (mediaId) => {
    return mediaId;
  },
}) => {
  const [selected, setSelected] = useState(mediaId);

  const { data, loading, error } = useGetMediaQuery();
  if (loading) return <Loading />;
  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;

  const getImageUrl = (id) => {
    const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/media/${id}`;
    return imageUrl;
  };

  return (
    <Flex
      justifyContent="center"
      flexDirection="row"
      alignContent="flex-start"
      flexWrap="wrap"
    >
      <Carousel
        items={data?.media?.map((media) => (
          <StyledImage
            active={Number(media?.id) == selected}
            onClick={() => {
              console.log(media?.id);
              setSelected(Number(media?.id));
              handleChange(media?.id);
            }}
            key={media?.id}
            src={getImageUrl(media?.id)}
          ></StyledImage>
        ))}
      ></Carousel>
    </Flex>
  );
};

interface StyledImageProp {
  active: Boolean;
}

const StyledImage = styled.img<StyledImageProp>`
  opacity: 0.3;
  height: auto;
  max-height: 100px;
  max-width: 200px;

  ${({ active }) =>
    active &&
    `
    opacity: 1;
`}

  &:hover {
    opacity: 1;
  }
`;

export default MediaPicker;
