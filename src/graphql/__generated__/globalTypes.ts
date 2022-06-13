/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ModuleType {
  ARTICLE = "ARTICLE",
  INTRODUCTION = "INTRODUCTION",
  OFFER = "OFFER",
  SERVICE = "SERVICE",
}

export interface AnswerInput {
  question?: string | null;
  answer?: string | null;
}

export interface ContactInput {
  fullName: string;
  phoneNumber: string;
  email?: string | null;
  address?: string | null;
  category?: string | null;
  survey?: SurveyInput | null;
}

export interface ContactUniqueInput {
  id: string;
}

export interface ModuleInput {
  id?: string | null;
  title?: string | null;
  introduction?: string | null;
  tag?: string | null;
  content?: string | null;
  contactButton?: string | null;
  mediaId?: number | null;
  type?: ModuleType | null;
}

export interface ModuleUniqueInput {
  id: string;
}

export interface ModuleWhereInput {
  type?: ModuleType | null;
}

export interface SurveyInput {
  name?: string | null;
  answers?: (AnswerInput | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
