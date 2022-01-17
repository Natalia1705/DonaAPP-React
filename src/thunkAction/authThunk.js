import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp } from '../api/auth/authRequest';

// prettier-ignore
export const postSignIn = createAsyncThunk('auth/postSignIn', async (user) => {
  const res = await signIn(user);
  return res.json();
});

// prettier-ignore
export const postSignUp = createAsyncThunk('auth/postSignUp', async (user) => {
  const res = await signUp(user);
  return res.json();
});
