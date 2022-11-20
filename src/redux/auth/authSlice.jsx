import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [logIn.pending]: handlePending,
    [logIn.rejected]: handleRejected,
    [logOut.pending]: handlePending,
    [logOut.rejected]: handleRejected,
    [refreshCurrentUser.pending]: handlePending,
    [refreshCurrentUser.rejected]: handleRejected,

    [register.fulfilled](state, action) {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
