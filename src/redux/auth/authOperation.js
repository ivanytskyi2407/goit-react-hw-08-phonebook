import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from '../contactsOperations';
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk(
  '/auth/register',
  async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk('/auth/login', async credentials => {
  const dispatch = useDispatch();

  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    // dispatch(fetchContacts());
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

// const authOperation = {
//   register,
//   login,
//   logOut,
// };
// export default authOperation;
