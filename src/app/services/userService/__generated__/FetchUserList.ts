/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserList
// ====================================================

export interface FetchUserList_country {
  __typename: "Country";
  code: string;
  name: string;
}

export interface FetchUserList {
  country: FetchUserList_country | null;
}
