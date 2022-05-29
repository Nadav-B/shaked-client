/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetContacts
// ====================================================

export interface GetContacts_contacts_survey_answers {
  __typename: "Answer";
  answer: string | null;
  question: string | null;
}

export interface GetContacts_contacts_survey {
  __typename: "Survey";
  id: string | null;
  name: string | null;
  answers: (GetContacts_contacts_survey_answers | null)[] | null;
}

export interface GetContacts_contacts {
  __typename: "Contact";
  id: string;
  fullName: string;
  category: string | null;
  createdAt: any;
  phoneNumber: string;
  survey: GetContacts_contacts_survey | null;
}

export interface GetContacts {
  contacts: (GetContacts_contacts | null)[] | null;
}
