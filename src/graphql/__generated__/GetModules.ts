/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetModules
// ====================================================

export interface GetModules_modules {
  __typename: "Module";
  id: string;
  title: string | null;
  introduction: string | null;
  tag: string | null;
  mediaId: number | null;
}

export interface GetModules {
  modules: (GetModules_modules | null)[] | null;
}
