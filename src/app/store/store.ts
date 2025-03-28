import { legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducers } from ".";

const persistConfig = {
    key: 'root',
    storage,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
