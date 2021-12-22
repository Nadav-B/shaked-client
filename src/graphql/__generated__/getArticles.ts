/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArticles
// ====================================================

export interface getArticles_getServices {
  __typename: "Service";
  id: string;
  title: string | null;
  introduction: string | null;
}

export interface getArticles {
  getServices: (getArticles_getServices | null)[] | null;
}
