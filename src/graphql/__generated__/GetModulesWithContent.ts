/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModuleWhereInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetModulesWithContent
// ====================================================

export interface GetModulesWithContent_modules {
  __typename: "Module";
  id: string;
  title: string | null;
  introduction: string | null;
  tag: string | null;
  content: string | null;
  mediaId: number | null;
}

export interface GetModulesWithContent {
  modules: (GetModulesWithContent_modules | null)[] | null;
}

export interface GetModulesWithContentVariables {
  where: ModuleWhereInput;
}
