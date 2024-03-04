import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './usersApi';
import userReducer from './usersSlice';
import searchReducer from './searchSlice';
import routerReducer from './routerSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    search: searchReducer,
    router: routerReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
