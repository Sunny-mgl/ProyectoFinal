import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
          const products = action.payload
          return products
        }
    }
})

export const getProductsThunk = () => dispatch => {
    dispatch (setIsLoading(true))
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
}
 // este thunk me ayuda hacer el filtrado por id
export const filterProductsThunk = (id) => dispatch => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
// los thunk se despachan
export const FilterProductNameThunk = (search) => dispatch => {
    dispatch(setIsLoading(true));
     return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${search}`)
      //axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products?title='+search) esta es otra forma de hacerlo sin las comilla invertidas
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
