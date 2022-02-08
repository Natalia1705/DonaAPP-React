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
export const createCustomerThunk = createAsyncThunk('payment/createCustomer', async () => {
  const res = await createCustomer();
  return res.json();
});

// prettier-ignore
export const createCardAndCustomerThunk = createAsyncThunk('payment/createCardAndCustomer', async (creditCard, { rejectWithValue }) => {
  try {
    const card = await createCardToken(creditCard);
    const customer = await createCustomer();
    if (card.status !== 200 || customer.status !== 200) {
      throw new Error();
    }
    return { card: await card.json(), customer: await customer.json() };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// prettier-ignore
export const makePaymentThunk = createAsyncThunk('payment/makePayment', async (data) => {
  const res = await makePayment(data);
  return res.json();
});
