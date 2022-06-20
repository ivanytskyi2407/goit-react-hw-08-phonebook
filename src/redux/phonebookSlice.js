import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './phoneBookOperation';

const setError = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};
const setPending = state => {
  state.status = 'loading';
  state.error = null;
};

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: { entities: [], filter: '', status: null, error: null },
  reducers: {
    filterContacts: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.entities = payload;
    },
    [removeContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: null,
        entities: state.entities.filter(({ id }) => {
          return id !== payload.id;
        }),
      };
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: null,
        entities: [...state.entities, payload],
      };
    },
    [removeContact.pending]: setPending,
    [fetchContacts.pending]: setPending,
    [addContact.pending]: setPending,
    [fetchContacts.rejected]: setError,
    [removeContact.rejected]: setError,
    [addContact.rejected]: setError,
  },
});

export default phonebookSlice.reducer;
export const { filterContacts } = phonebookSlice.actions;
