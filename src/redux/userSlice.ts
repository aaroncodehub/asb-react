import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserState {
  firstName: string;
}

const initialState: UserState = {
  firstName: "Aaron",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
        state.firstName = action.payload;
      },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.firstName;


export default userSlice.reducer;
