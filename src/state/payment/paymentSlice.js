import { createSlice } from '@reduxjs/toolkit';
import {
  createCardTokenThunk,
  createCustomerThunk,
  makePaymentThunk,
} from '../../thunkAction/paymentThunk';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    dataPayment: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createCardTokenThunk.fulfilled, (state, action) => {
      state.dataPayment = action.payload;
      state.loading = false;
    });
    builder.addCase(createCardTokenThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCardTokenThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createCustomerThunk.fulfilled, (state, action) => {
      state.dataPayment = action.payload;
      state.loading = false;
    });
    builder.addCase(createCustomerThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCustomerThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(makePaymentThunk.fulfilled, (state, action) => {
      state.dataPayment = action.payload;
      state.loading = false;
    });
    builder.addCase(makePaymentThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(makePaymentThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default paymentSlice.reducer;
