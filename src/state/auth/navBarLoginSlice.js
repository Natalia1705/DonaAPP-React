import { createSlice } from '@reduxjs/toolkit';
import Auth from '../../utils/Auth';

const navBarLoginSlice = createSlice({
  name: 'navBarLoginSlice',
  initialState: { isLogged: Auth.isLogin() },
  reducers: {
    setLogin: (state) => {
      state.isLogged = true;
    },
    setLogOut: (state) => {
      state.isLogged = false;
    },
  },
});
export const { setLogin, setLogOut } = navBarLoginSlice.actions;

export default navBarLoginSlice.reducer;
