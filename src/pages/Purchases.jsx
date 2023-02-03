import axios from 'axios';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slice/purchasesNew.slice';

const Purchases = () => {

    const purchases = useSelector(state => state.purchasesNew)


    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesThunk())

    }, [])
    console.log(purchases)
    const back = () => {
        navigate("/")
    }

    return (
        <div>
            <button onClick={back} style={{ border: "none", background: "white" }}>
                <i className="fa-solid fa-house-chimney"></i>
            </button>
            <br />
            <br />
            <h1> My Purchases <i className="fa-solid fa-store"></i></h1>
             <br />
             <br />
             <br />
            <ul>
                {
                    purchases.map(purchase => (
                        <li key={purchase?.id}>


                            <Link to={`/product/${purchase.product?.id}`} style={{textDecoration: "none"}}>
                                <Row className='purchases'>
                                    <Col md={3}>
                                        <img src={purchase.product?.images[0]?.url} style={{ width: 100 }} alt="" />
                                    </Col>
                                    <Col md={3}>
                                        <h4>{purchase.product?.title} </h4>
                                    </Col>
                                    <Col md={3}>
                                        <p className='quantity'>{purchase.quantity}</p>
                                    </Col>
                                    <Col md={3}>
                                        <p><b>{purchase.product?.price}</b></p>
                                    </Col>
                                    <br />
                                    
                                    
                                </Row>
                                <hr />
                            </Link>

                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Purchases;