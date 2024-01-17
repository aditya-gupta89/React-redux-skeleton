import { configureStore, Middleware } from "@reduxjs/toolkit";
import auth from "./slice";
import createSagaMiddleware from "redux-saga";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {
    auth: [
      {
        text: "Eat food",
        completed: true,
      },
      {
        text: "Exercise",
        completed: false,
      },
    ],
    visibilityFilter: "SHOW_COMPLETED",
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export const persistor = persistStore(store);
