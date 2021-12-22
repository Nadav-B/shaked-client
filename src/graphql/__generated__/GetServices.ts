/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServices
// ====================================================

export interface GetServices_getServices {
  __typename: "Service";
  id: string;
  title: string | null;
  introduction: string | null;
}

export interface GetServices {
  getServices: (GetServices_getServices | null)[] | null;
}
