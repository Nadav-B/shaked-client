/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ArticleInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveArticle
// ====================================================

export interface SaveArticle_saveArticle {
  __typename: "Article";
  id: string;
  title: string | null;
  introduction: string | null;
  tag: string | null;
  content: string | null;
  contactButton: string | null;
}

export interface SaveArticle {
  saveArticle: SaveArticle_saveArticle | null;
}

export interface SaveArticleVariables {
  data: ArticleInput;
}
