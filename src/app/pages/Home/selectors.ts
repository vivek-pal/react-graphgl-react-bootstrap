import { createSelector } from "reselect";

const selectHome = (state: any) => state.home;

export const makeSelectUserlist = createSelector(
  selectHome,
  (home) => home?.userList
);
