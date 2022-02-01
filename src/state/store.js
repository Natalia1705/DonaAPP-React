import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import navBarLoginSlice from './auth/navBarLoginSlice';

export default configureStore({
  reducer: {
    authReducer,
    navBarLoginSlice,
  },
});
