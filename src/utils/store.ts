import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import characterDataReducer from "../store/reducers/reducer";

export const store = configureStore({
  reducer: {
    characterData: characterDataReducer
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