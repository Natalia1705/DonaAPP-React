import { createSlice } from '@reduxjs/toolkit';
import {
  createCardAndCustomerThunk,
  makePaymentThunk,
} from '../../thunkAction/paymentThunk';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    resPayment: null,
    resCard: null,
    loading: false,
    success: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createCardAndCustomerThunk.fulfilled, (state, action) => {
      state.resCard = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createCardAndCustomerThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCardAndCustomerThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(makePaymentThunk.fulfilled, (state, action) => {
      state.resPayment = action.payload;
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
