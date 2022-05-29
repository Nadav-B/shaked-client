/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModuleType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetModule
// ====================================================

export interface GetModule_module {
  __typename: "Module";
  id: string;
  title: string | null;
  introduction: string | null;
  content: string | null;
  tag: string | null;
  mediaId: number | null;
  contactButton: string | null;
  createdAt: any;
  updatedAt: any;
  type: ModuleType;
}

export interface GetModule {
  module: GetModule_module | null;
}

export interface GetModuleVariables {
  id: string;
}
