import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  effectiveDate: "",
  product: "",
  effectiveDateValid: false,
  productValid: false,

  name: "",
  address: "",
  city:"",
  state:"",
  zip:"",
  nameValid: false,
  addressValid: false,
  accountEffectiveDate:"",
  accountExpirationDate: "",

  businessClassCode:"",
  subClassList: [{
    id: 0,
    isDeleted: false,
    serialNo: 1,
    subClass: "",
    numberToParticipants: "",
  }],

  nextClick: false,

};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: defaultValue,
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },
    reset: (state, action) => {
      state.value = defaultValue;
    },
  },
});
export const { info } = userSlice.actions;
export const { reset } = userSlice.actions;
export default userSlice.reducer;
