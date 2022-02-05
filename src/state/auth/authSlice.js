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
      if (JSON.stringify(action.payload) !== JSON.stringify(userExists)) {
        state.user = action.payload;
      } else {
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
      const matchFailed = { msg: 'The email or password are incorrect' };
      const nonExistentUser = { msg: 'The user does not exists' };
      if (JSON.stringify(action.payload) === JSON.stringify(nonExistentUser)) {
        state.error = action.payload;
      } else if (
        JSON.stringify(action.payload) === JSON.stringify(matchFailed)
      ) {
        state.error = action.payload;
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
