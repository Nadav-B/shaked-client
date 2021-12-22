/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindAllArticles
// ====================================================

export interface FindAllArticles_getArticles {
  __typename: "Article";
  id: string;
  title: string | null;
  introduction: string | null;
  tag: string | null;
}

export interface FindAllArticles {
  getArticles: (FindAllArticles_getArticles | null)[] | null;
}
