import React from "react";
import {Link} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";


export default ({handleChange, handleClick}) => {


  const formStyle = {
    width: "300px",
    padding: "1rem",
    borderRadius: "0px",

  }
  const divFormStyle = {
    justifyContent: 'center',
    marginBlockEnd: "5rem",
    maxWidth: "400px"
    
  }





  return (

    <Card className="form-container">
      <Row>
      <span>
        <div style={divFormStyle}>
          <Form onSubmit={handleClick} style={formStyle} >
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" onChange={handleChange} name='firstName' />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" onChange={handleChange} name='lastName' />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={handleChange} name='email' />
              <Form.Text className="text-muted">
                Nunca compartiremos tu Email
          </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' />
            </Form.Group>
            <Button  className='boton-solido' type="submit">
              Registrar
            </Button>
            <Link to="/login">
              <Form.Text className="text-muted">
                  Ya tienes una cuenta? Ir al login.
              </Form.Text>
            </Link>
          </Form>
        </div>
      </span>
      </Row>
    </Card>

  );
};