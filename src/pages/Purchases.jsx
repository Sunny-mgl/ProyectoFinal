import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slice/purchasesNew.slice';

const Purchases = () => {

const purchases = useSelector (state => state.purchasesNew)



const dispatch = useDispatch()

useEffect (() => {
dispatch(getPurchasesThunk())

}, [])
console.log(purchases)
    return (
        <div>
            <h1>Purchases</h1>
        </div>
    );
};

export default Purchases;