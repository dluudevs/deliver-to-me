import { createSlice } from '@reduxjs/toolkit';

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    data: [],
  },
  reducers: {
    ADD_RESULTS: (state, action) => {
      state.data = [...state.data, ...action.payload]
    },
    CLEAR_RESULTS: (state) => {
      state.data = []
    }
  }
});

export const { ADD_RESULTS, CLEAR_RESULTS } = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurants.data

export default restaurantSlice.reducer;
