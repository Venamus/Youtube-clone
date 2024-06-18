import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth-slice";

export const Store = configureStore({
  reducer: { auth: authSlice.reducer },
});
