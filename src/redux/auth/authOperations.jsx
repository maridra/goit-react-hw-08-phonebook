import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  width: '350px',
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontSize: '16px',
});

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      Notify.failure(
        'An error has occurred❗️Please make sure the data is correct and try again.'
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      Notify.failure(
        'An error has occurred❗️Please make sure the data is correct and try again.'
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset(data.token);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.authData.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
