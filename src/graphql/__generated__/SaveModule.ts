/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModuleInput, ModuleType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveModule
// ====================================================

export interface SaveModule_saveModule {
  __typename: "Module";
  id: string;
  title: string | null;
  introduction: string | null;
  tag: string | null;
  content: string | null;
  mediaId: number | null;
  contactButton: string | null;
  type: ModuleType;
}

export interface SaveModule {
  saveModule: SaveModule_saveModule | null;
}

export interface SaveModuleVariables {
  data: ModuleInput;
}
