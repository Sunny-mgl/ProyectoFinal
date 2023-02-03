import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Home from '../components/Home';
import { carThunk } from '../store/slice/carProduct.slice';
import { filterProductsThunk } from '../store/slice/products.slice';

const ProductDatail = () => {

    const { id } = useParams() // y aqui accedi al id y lo muestro en pantalla
    const [productDetail, setProductDetail] = useState({})
    const dispatch = useDispatch()
    const product = useSelector(state => state.products)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setProductDetail(res.data)
                console.log(res.data.category.id)
                dispatch(filterProductsThunk(res.data.category.id))
            })
    }, [id])

    console.log(productDetail)

    const back = () => {
        navigate("/")
    }

    const purchse = () => {
        navigate("/purchases")
    }



 const [buttonCar, setButtonCar] = useState(1)


    const plus = () => {
        setButtonCar(buttonCar + 1)
        // alert("car")
    }

    const rest = () => {
        setButtonCar(buttonCar - 1)
    }
   
    const carButton = () => {
        const car = {
            quantity: buttonCar,
            productId: productDetail.id

        }
        dispatch(carThunk(car))
    }


    return (
        <div >
            <button onClick={back} style={{ border: "none", background: "white" }}>
                <i className="fa-solid fa-house-chimney"></i>
            </button>
            ➝
            <button onClick={purchse} style={{ border: "none", background: "white" }}>
                <i className="fa-solid fa-store"></i>
            </button>
            <br />
            <br />

            <h1 className='discover'>{productDetail.title}</h1>
            <br />
            <Row>
                <Col lg={7}>
                    <Carousel variant="dark">
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={productDetail?.images?.[0].url} style={{ height: 300, objectFit: "contain" }}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={productDetail?.images?.[1].url} style={{ height: 300, objectFit: "contain" }}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={productDetail?.images?.[2].url} style={{ height: 300, objectFit: "contain" }}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col lg={5}>
                    <p style={{ color: "gray" }}>{productDetail.brand}</p>
                    <h4>{productDetail.title}</h4>
                    <p>{productDetail.description}</p>
                    <br />
                    <p style={{ color: "gray" }}>Price</p>

                    <Row>
                        <Col lg={6}>
                            <h4>{productDetail.price}</h4>
                        </Col>

                        <Col lg={6}>
                            <button className='rest-plus' onClick={rest}> <i className="fa-solid fa-minus"></i></button>
                            <input type=""
                            className='input-rest-plus'
                                style={{ width: 50, textAlign: "center" }}
                                value={buttonCar}
                                onChange={e => setButtonCar(e.target.value)}
                            />
                            <button className='rest-plus' onClick={plus}> <i className="fa-solid fa-plus"></i></button>
                        </Col>
                    </Row> 
                    <br />
                    <Button onClick={carButton} className='buttonCrd'> <i className="fa-solid fa-cart-plus"></i></Button>
                </Col>
            </Row>
            <br />
            {/* {

                product.map(produc => (
                    <li key={produc.id} onClick={() => navigate(`/product/${produc.id}`)}>
                        {produc.title}
                    </li>

                ))
            } */}
            <br />
            <br />
            <br />   <h4 className='discover'>Discover similar items</h4>
            <br />
            <br />
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">
                {product.map(produc => (
                    <Col key={produc.id} onClick={() => navigate(`/product/${produc.id}`)}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={produc.images?.[0].url}
                                style={{ height: 200, objectFit: "contain" }} />
                            <hr />
                            <Card.Body>
                                <Card.Text>
                                    {produc.brand}
                                </Card.Text>
                                <Card.Title>{produc.title} </Card.Title>
                                <br />
                                <Card.Text>
                                    Price
                                </Card.Text>
                                <Card.Title>{produc.price} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
             
        </div>
    );
};


export default ProductDatail;