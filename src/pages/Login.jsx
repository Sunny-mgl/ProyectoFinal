import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const {register, handleSubmit} = useForm()
const navigate= useNavigate()

const submit = (data) => {
  console.log(data)
  axios.post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data) //el post tiene body que este caso es data
  .then(res => {
    console.log(res.data)
    localStorage.setItem("token", res.data.token)
    navigate("/")
})
  .catch(error => {
    console.log(error.response.status)
    if(error.response.status ===401){
        alert("Credenciales Incorrectas")
    }  console.log(error)
  })
}

    return (
        <div>
        
            <Form className='form' onSubmit={handleSubmit(submit)} style={{width: 300, margin: "auto", marginBottom: 300}}>    
            <h1 className='login'>Login</h1>
            <div className='john'>
                <p> <i className="fa-solid fa-envelope"></i> john@gmail.com</p>
                <p> <i className="fa-solid fa-lock"></i> john1234</p>
            </div>
            <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    {...register("email")}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                     placeholder="Password" 
                     {...register("password")}
                     />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button  style={{width: 235,}} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;