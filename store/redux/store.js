import {configureStore} from '@reduxjs/toolkit';

import favoritesReduser from './favorites';
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReduser
  },
});