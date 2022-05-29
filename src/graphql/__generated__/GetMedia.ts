/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMedia
// ====================================================

export interface GetMedia_media {
  __typename: "Media";
  id: string;
  fileName: string | null;
}

export interface GetMedia {
  media: (GetMedia_media | null)[] | null;
}
