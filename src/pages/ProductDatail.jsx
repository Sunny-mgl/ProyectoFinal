import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { filterProductsThunk } from '../store/slice/Products.slice';

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


    return (
        <div >
            <h1>{productDetail.title}</h1>
            <br />
            <Row>
                <Col lg={7}>
                    <Carousel variant="dark">
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={productDetail.images?.[0].url} style={{ height: 300, objectFit: "contain" }}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={productDetail.images?.[1].url} style={{ height: 300, objectFit: "contain" }}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={productDetail.images?.[2].url} style={{ height: 300, objectFit: "contain" }}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col lg={5}>
                    <h4>{productDetail.price}</h4>
                    <h4>{productDetail.title}</h4>
                    <p>{productDetail.description}</p>

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
            <br />   <h5>Discover similar items</h5>
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