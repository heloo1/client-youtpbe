import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import videoReducer from '~/app/videoSlice';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const persistedReducer = persistReducer(persistConfig, videoReducer);
export const store = configureStore({
    reducer: {
        video: persistedReducer,
    },
});
