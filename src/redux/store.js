import { configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reduce from '../redux/Contacts/contact-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
    storage,
  blacklist: ['filter'],
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, reduce),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
   

const persistor = persistStore(store);

// eslint-disable-next-line 
export default {store,persistor};