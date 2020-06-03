import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import restaurantReducer from '../slice/restaurantSlice'

export default configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
});
