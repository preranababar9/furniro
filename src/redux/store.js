import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './reducers/ProductSlice';

export default configureStore({
  reducer: {
        productData: dataReducer,
  },
})