import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const carProductSlice = createSlice({
    name: 'carProduct',
    initialState: [],
    reducers: {
      setCar : (state, action) => {
          const car = action.payload
          return car
      }
    }
})
 
export const  carProductThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
        .then(res => dispatch(setCar(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const carThunk = (car) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://e-commerce-api-v2.academlo.tech/api/v1/cart", car, getConfig())
        .then(() => dispatch(carProductThunk()))
        .catch(() => alert("error"))
        .finally(() => dispatch(setIsLoading(false)));
}

export const thunkPlusCard = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", {}, getConfig())
        .then(() => dispatch(carProductThunk())) // setCar([])
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setCar } = carProductSlice.actions;

export default carProductSlice.reducer;
