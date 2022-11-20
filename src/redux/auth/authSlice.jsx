import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
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
    [refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = true;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
    },
    [refreshCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
