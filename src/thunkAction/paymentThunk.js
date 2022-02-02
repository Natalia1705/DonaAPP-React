import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createCardToken,
  createCustomer,
  makePayment,
} from '../api/payment/paymentRequest';

// prettier-ignore
export const createCardTokenThunk = createAsyncThunk('payment/createCardToken', async (card) => {
  const res = await createCardToken(card);
  return res.json();
});

// prettier-ignore
export const createCustomerThunk = createAsyncThunk('payment/createCustomer', async (customer) => {
  const res = await createCustomer(customer);
  return res.json();
});

// prettier-ignore
export const makePaymentThunk = createAsyncThunk('payment/makePayment', async (data) => {
  const res = await makePayment(data);
  return res.json();
});
