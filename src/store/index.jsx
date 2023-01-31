import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slice/isLoading.slice'
import  productsSlice  from './slice/products.slice'
import  purchasesNewSlice  from './slice/purchasesNew.slice'

export default configureStore({
    reducer: {
     isLoading : isLoadingSlice,
     products : productsSlice,
     purchasesNew : purchasesNewSlice
    }
})


