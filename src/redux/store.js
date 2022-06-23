// import phonebookSlice from './phonebookSlice';
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: { contacts: phonebookSlice },
// });
// import logger from 'redux-logger';

import authReducer from './auth/authSlice';
import contactReducer from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(logger),
});

export const persistor = persistStore(store);
