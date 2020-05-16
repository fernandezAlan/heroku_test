import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner"

export default ({ usuarios, handleStatus, handleDelete, handleChange }) => {

  // agregar un sort() para ordenar las ordenes

  return (
    <div>
      <Card id='user-card' style={{justifyContent:"center"}} >
      <Form.Control type="text" placeholder="Buscar Usuarios" name="input" onChange={handleChange} />
      </Card>
      {!usuarios ? (
              <Spinner animation="border" role="status" variant="light">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ):(
  usuarios.map(usuario => {
    return (
      <Container>
        <Card id='user-card'>
          <Card.Title>Usuario N°  {usuario.id}</Card.Title>
          <h6>Nombre: {usuario.firstName + " " + usuario.lastName}</h6>
          <h6>Email: {usuario.email}</h6>
          <h6 name="usuario">
            Status:{" "}
            {usuario.type == "normal" ? (
              <DropdownButton id="dropdown-basic-button" title="Normal">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => handleStatus("admin", usuario.id)}
                >
                  Admin
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <DropdownButton id="dropdown-basic-button" title="Admin">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => handleStatus("normal", usuario.id)}
                >
                  Normal
                </Dropdown.Item>
              </DropdownButton>
            )}
          </h6>
          <Button className={'boton-solido'} type="submit" onClick={() => handleDelete(usuario.id)} >Eliminar Usuario</Button>
        </Card>
      </Container>
    );
  }) )
}
  </div>
  )
};
