import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { createLogger } from 'redux-logger'
import { customLogger } from "redux/middlewares/logger";
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['app'],
    blacklist: [],
};

const logger = createLogger();
const middlewares = [thunkMiddleware, customLogger, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
    reducer: persistedReducer,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [...middlewares]
})

export const persistor = persistStore(store);