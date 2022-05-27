/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticle
// ====================================================

export interface GetArticle_article {
  __typename: "Article";
  id: string;
  title: string | null;
  introduction: string | null;
  content: string | null;
  tag: string | null;
  mediaId: number | null;
  contactButton: string | null;
  modificationDate: any | null;
}

export interface GetArticle {
  article: GetArticle_article | null;
}

export interface GetArticleVariables {
  id: string;
}
