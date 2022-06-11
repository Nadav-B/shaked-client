/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContactUniqueInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetContact
// ====================================================

export interface GetContact_contact_survey_answers {
  __typename: "Answer";
  answer: string | null;
  question: string | null;
}

export interface GetContact_contact_survey {
  __typename: "Survey";
  id: string | null;
  name: string | null;
  answers: (GetContact_contact_survey_answers | null)[] | null;
}

export interface GetContact_contact {
  __typename: "Contact";
  id: string;
  fullName: string;
  category: string | null;
  createdAt: any;
  phoneNumber: string;
  survey: GetContact_contact_survey | null;
}

export interface GetContact {
  contact: GetContact_contact | null;
}

export interface GetContactVariables {
  where: ContactUniqueInput;
}
