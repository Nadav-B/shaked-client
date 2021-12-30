/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AnswerInput {
  answer?: string | null;
  id?: string | null;
  question?: string | null;
  survey?: SurveyInput | null;
}

export interface ContactInput {
  address?: string | null;
  category?: string | null;
  comment?: string | null;
  date?: any | null;
  email?: string | null;
  fullName: string;
  id?: string | null;
  phoneNumber: string;
  survey?: SurveyInput | null;
}

export interface SurveyInput {
  answers?: (AnswerInput | null)[] | null;
  contact?: ContactInput | null;
  id?: string | null;
  name?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
