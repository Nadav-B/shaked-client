/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticles
// ====================================================

export interface GetArticles_articles {
  __typename: "Article";
  title: string | null;
  introduction: string | null;
  tag: string | null;
}

export interface GetArticles {
  articles: (GetArticles_articles | null)[] | null;
}
