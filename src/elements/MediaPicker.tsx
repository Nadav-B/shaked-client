import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GetMedia } from "../graphql/__generated__/GetMedia";
import query from "../graphql/GetMedia.graphql";
import Loading from "./Loading";
import Error from "./Error";
import styled from "@emotion/styled";
import Flex from "./Flex";
import Text from "./Text";

interface MediaPickerProps {
  mediaId?: number;
  handleChange?: Function;
}

const MediaPicker: React.FC<MediaPickerProps> = ({
  mediaId,
  handleChange = (mediaId) => console.log(mediaId),
}) => {
  const [selected, setSelected] = useState(mediaId);

  const { data, loading, error } = useQuery<GetMedia>(query);
  if (loading) return <Loading />;
  if (error) return <Error errorDescription={"שגיאה בטעינה העמוד"} />;

  const getImageUrl = (id) => {
    const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/media/${id}`;
    return imageUrl;
  };

  return (
    <Flex>
      {data?.media?.map((media) => (
        <Flex flexWrap="wrap" flexDirection="column">
          <StyledImage
            active={Number(media.id) == selected}
            onClick={() => {
              console.log(media.id);
              setSelected(Number(media.id));
              handleChange(media.id);
            }}
            key={media.id}
            src={getImageUrl(media.id)}
          ></StyledImage>
        </Flex>
      ))}
    </Flex>
  );
};

interface StyledImageProp {
  active: Boolean;
}

const StyledImage = styled.img<StyledImageProp>`
  width: auto;
  height: 200px;
  opacity: 0.3;

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
