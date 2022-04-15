/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetService
// ====================================================

export interface GetService_service {
  __typename: "Service";
  id: any;
  title: string | null;
  introduction: string | null;
  content: string | null;
  contactButton: string | null;
}

export interface GetService {
  service: GetService_service | null;
}

export interface GetServiceVariables {
  id: any;
}
