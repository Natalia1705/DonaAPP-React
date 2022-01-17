import { createSlice } from '@reduxjs/toolkit';
import { postSignUp, postSignIn } from '../../thunkAction/authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(postSignUp.fulfilled, (state, action) => {
      state.user = action.payload;
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
      state.user = action.payload;
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

export default authSlice.reducer;
