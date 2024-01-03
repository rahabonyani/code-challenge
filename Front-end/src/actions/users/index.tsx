import type { User } from "@/models/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { save } = userListSlice.actions;

export default userListSlice.reducer;
