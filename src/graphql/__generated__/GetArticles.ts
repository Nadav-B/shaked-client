/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticles
// ====================================================

export interface GetArticles_getArticles {
  __typename: "Article";
  id: string;
  title: string | null;
  introduction: string | null;
  tag: string | null;
}

export interface GetArticles {
  getArticles: (GetArticles_getArticles | null)[] | null;
}
