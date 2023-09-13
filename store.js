import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import restaurantSlice from './slice/restaurantSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice
  },
})
