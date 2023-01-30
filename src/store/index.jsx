import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slice/isLoading.slice'
import  productsSlice  from './slice/Products.slice'

export default configureStore({
    reducer: {
     isLoading : isLoadingSlice,
     products : productsSlice
    }
})


