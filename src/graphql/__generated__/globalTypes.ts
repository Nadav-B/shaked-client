/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AnswerInput {
  question?: string | null;
  answer?: string | null;
}

export interface ContactInput {
  fullName?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  address?: string | null;
  category?: string | null;
  survey?: SurveyInput | null;
}

export interface SurveyInput {
  name?: string | null;
  answers?: (AnswerInput | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
