import React, { useEffect } from 'react';
import { Button, Card, Col, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { carProductThunk, thunkPlusCard } from '../store/slice/carProduct.slice';

const ProductCar = ({ show, handleClose }) => {

    const cars = useSelector(state => state.carProduct) // con esto traigo los producto desde redux
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(carProductThunk())
    }, [])

    console.log(cars)

    return (

        <Offcanvas placement='end' show={show} onHide={handleClose}> {/*el placement='end' me ayuda a que mi navbar apararesca al final */}
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Car</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            
                {
                    cars.map(car => (
                        <div key={car.id}>
                            <Row>
                                <Col lg={5}>
                                    <img src={car.product?.images[0].url} style={{ height: 100, objectFit: "contain" }} alt="" />
                                </Col> 
                                <Col lg={5}>
                                    <p><b>{car.product?.title}</b></p>
                                    <p>{car.product?.price}</p>
                                </Col>
                                <Col lg={2}>
                                   <p className='quantity'> <b>{car.quantity}</b></p>
                                </Col>
                            </Row>
                            <br />
                            <hr />
                            <br />
                        </div>


                    ))
                }

            </Offcanvas.Body>
            <br />
            <hr />
            <br />
            <Button onClick={() => dispatch(thunkPlusCard())} className='buttoncheck'> CheckOut</Button>
        </Offcanvas>

    );
};

export default ProductCar;