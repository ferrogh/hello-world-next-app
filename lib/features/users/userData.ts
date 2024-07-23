import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
  status: "unloaded" | "loaded";
}

const initialState: UserState = {
  userName: "Joe",
  status: "unloaded",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve("Ferro"), 3000)
  );
  return response as string;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userName = action.payload;
      state.status = "loaded";
    });
  },
});

export default usersSlice.reducer;
