/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContactInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveContact
// ====================================================

export interface SaveContact_createContact {
  __typename: "Contact";
  fullName: string | null;
  phoneNumber: string | null;
  email: string | null;
  address: string | null;
  category: string | null;
  comment: string | null;
}

export interface SaveContact {
  createContact: SaveContact_createContact | null;
}

export interface SaveContactVariables {
  contactInput: ContactInput;
}
