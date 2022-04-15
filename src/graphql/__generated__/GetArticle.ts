/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticle
// ====================================================

export interface GetArticle_article {
  __typename: "Article";
  id: any;
  title: string | null;
  introduction: string | null;
  content: string | null;
  tag: string | null;
  contactButton: string | null;
}

export interface GetArticle {
  article: GetArticle_article | null;
}

export interface GetArticleVariables {
  id: any;
}
