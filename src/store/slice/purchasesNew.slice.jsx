import { createSlice } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const purchasesNewSlice = createSlice({
    name: 'purchasesNew',
    initialState: [],
    reducers: {
    setPurchases : (state, action) => {
      const purchases = action.payload
      return purchases
    }
    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", getConfig())
        .then(res => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setPurchases } = purchasesNewSlice.actions;

export default purchasesNewSlice.reducer;
