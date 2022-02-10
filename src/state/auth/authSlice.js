import { createSlice } from '@reduxjs/toolkit';

import { postSignUp, postSignIn } from '../../thunkAction/authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    cleaningUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSignUp.fulfilled, (state, action) => {
      const userExists = { msg: 'The user already exists' };
      if (JSON.stringify(action.payload) === JSON.stringify(userExists)) {
        state.error = action.payload;
      }
      state.loading = false;
    });
    builder.addCase(postSignUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postSignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postSignIn.fulfilled, (state, action) => {
      if (JSON.stringify(action.payload).includes('"msg":')) {
        state.error = action.payload.msg;
      } else {
        state.user = action.payload;
      }

      state.loading = false;
    });
    builder.addCase(postSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postSignIn.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { cleaningUser } = authSlice.actions;
export default authSlice.reducer;
