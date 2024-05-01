import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { registerUser } from "./UserApi";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const registerUserAsync = createAsyncThunk(
  "user/register",
  async (data) => {
    try {
      const response = await registerUser(data);
      return response.data;
    } catch (error) {
      return Error(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
