import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from '../features/companies/companiesSlice';

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;