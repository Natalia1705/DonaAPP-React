import { createSlice } from '@reduxjs/toolkit';

const navBarLoginSlice = createSlice({
  name: 'navBarLoginSlice',
  initialState: { isLogged: false },
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
