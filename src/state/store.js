import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import navBarLoginSlice from './auth/navBarLoginSlice';
import paymentReducer from './payment/paymentSlice';

export default configureStore({
  reducer: {
    authReducer,
    navBarLoginSlice,
    paymentReducer,
  },
});
