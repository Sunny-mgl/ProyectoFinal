import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FilterProductNameThunk, filterProductsThunk, getProductsThunk } from '../store/slice/products.slice';


// https://e-commerce-api-v2.academlo.tech/api/v1/categories
// el slice lo vamos a utilzar si tenemos que hacer muchos cambios en diferentes partes de la aplicacion
const Home = () => {

    const dispatch = useDispatch()
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        dispatch(getProductsThunk())


        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategories(res.data))
    }, [])

    // console.log(categories)

    const products = useSelector(state => state.products)
    const navigate = useNavigate() // me ayuda a redireccionar

    return (
        <div>
            <Row>
                {/* CATEGORIAS */}
                <Col lg={2}>
                    {
                        categories.map(category => (

                            <Button key={category.id} onClick={() => dispatch(filterProductsThunk(category.id))} style={{ cursor: "pointer", marginTop: 3 }}>
                                {category.name}
                            </Button>

                        ))
                    }
                </Col>
                <br />
                <br />
                {/* PRODUCTOS */}
                <Col lg={10}>
                    <h1>Home</h1>

                    <br />
                    <InputGroup className="mb-3" style={{ width: 350 }}>
                        <Form.Control
                            placeholder="Search"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <Button onClick={() => dispatch(FilterProductNameThunk(search))} variant="outline-secondary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>
                    <br />
                    {/* {
                        products.map(product => (
                            <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}> 
                                <p>{product.title}</p>
                                <img src={product.images?.[0].url} alt="" style={{ width: 150 }} />
                            </div>
                        ))
                    } */}
                    {/*el onClick de aqui me ayuda a que cuando hago click me lleve a product details */}
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products.map(product => (
                            <Col key={product.id} >
                                <Card >
                                    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }} className='home-card'>
                                        <Card.Img className='hover'
                                            variant="top"
                                            src={product.images?.[0].url}
                                            style={{ height: 200, objectFit: "contain" }}
                                        />
                                        <hr />
                                        <Card.Body>
                                            <Card.Text>
                                                {product.brand}
                                            </Card.Text>
                                            <Card.Title>{product.title} </Card.Title>
                                            <br />
                                            <Card.Text>
                                                Price
                                            </Card.Text>
                                            <Card.Title>{product.price} </Card.Title>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </div >
    );
};

export default Home;