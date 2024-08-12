import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./reducers/userReducer";

const makeStore = () =>
  configureStore({
    reducer: {
      userInfo: userReducer,
    },
  });

export const store = createWrapper(makeStore);
export const wrapper = createWrapper(makeStore, { debug: true });
