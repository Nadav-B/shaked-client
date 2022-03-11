/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTexts
// ====================================================

export interface GetTexts_texts {
  __typename: "TextContainer";
  id: string;
  content: string | null;
}

export interface GetTexts {
  texts: (GetTexts_texts | null)[] | null;
}
