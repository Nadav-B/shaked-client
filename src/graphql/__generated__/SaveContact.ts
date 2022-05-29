/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContactInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveContact
// ====================================================

export interface SaveContact_saveContact {
  __typename: "Contact";
  fullName: string;
  phoneNumber: string;
  email: string | null;
  address: string | null;
  category: string | null;
  comment: string | null;
}

export interface SaveContact {
  saveContact: SaveContact_saveContact | null;
}

export interface SaveContactVariables {
  data: ContactInput;
}
