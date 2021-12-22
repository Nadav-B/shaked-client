/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTexts
// ====================================================

export interface GetTexts_getTexts {
  __typename: "Text";
  id: string;
  content: string | null;
}

export interface GetTexts {
  getTexts: (GetTexts_getTexts | null)[] | null;
}
