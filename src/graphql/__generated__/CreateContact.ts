/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContactInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateContact
// ====================================================

export interface CreateContact_createContact {
  __typename: "Contact";
  fullName: string | null;
  phoneNumber: string | null;
  email: string | null;
  address: string | null;
  category: string | null;
  comment: string | null;
}

export interface CreateContact {
  createContact: CreateContact_createContact | null;
}

export interface CreateContactVariables {
  contactInput: ContactInput;
}
