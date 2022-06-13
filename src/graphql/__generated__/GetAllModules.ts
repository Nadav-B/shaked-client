/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllModules
// ====================================================

export interface GetAllModules_modules {
  __typename: "Module";
  id: string;
  title: string | null;
  introduction: string | null;
  tag: string | null;
  mediaId: number | null;
}

export interface GetAllModules {
  modules: (GetAllModules_modules | null)[] | null;
}
