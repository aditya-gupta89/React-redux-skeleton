import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    authAdd(state, action) {
      state?.push({
        id: action.payload.id,
        text: action.payload.text,
      });
    },
  },
});

export const { authAdd } = auth.actions;
export default auth.reducer;
