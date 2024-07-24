import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import homeReducer from "../app/pages/Home/homeSlice";
import pageReducer  from './pages/Main/page';
import userReducer from './pages/Main/user'

export const store = configureStore({
  reducer: {
    page:pageReducer,
    user:userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
