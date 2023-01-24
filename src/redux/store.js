import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
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

const rootReducer = combineReducers(
    {contacts: contactReducer,}
)

const persistConfig = {
    key: 'contacts',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);