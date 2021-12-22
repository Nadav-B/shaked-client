/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getServices
// ====================================================

export interface getServices_getServices {
  __typename: "Service";
  id: string;
  title: string | null;
  introduction: string | null;
}

export interface getServices {
  getServices: (getServices_getServices | null)[] | null;
}
