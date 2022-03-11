/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServices
// ====================================================

export interface GetServices_services {
  __typename: "Service";
  id: string | null;
  title: string | null;
  introduction: string | null;
}

export interface GetServices {
  services: (GetServices_services | null)[] | null;
}
