import { createSlice } from '@reduxjs/toolkit';

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    data: [],
  },
  reducers: {
    ADD_RESULTS: (state, action) => {
      state.data = [...state.data, ...action.payload]
    }
  }
});

export const { ADD_RESULTS } = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurants.data

export default restaurantSlice.reducer;
