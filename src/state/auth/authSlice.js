import { createSlice } from '@reduxjs/toolkit';
import { postSignUp } from '../../thunkAction/authThunk';

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
  },
});

export default authSlice.reducer;
