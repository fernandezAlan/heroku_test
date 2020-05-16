import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default ({ handleChange, handleSubmit }) => {
  const formStyle = {
    width: "80%",
    maxWidth: "800px",
    height: "110%",
    padding: "3rem",
    borderRadius: "0px",
    boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)",
  };

  const divFormStyle = {
    display: "flex",
    justifyContent: "center",
    marginBlockEnd: "5rem",
    marginBlockStart: "0.5rem",
  };
  return (
    <div style={divFormStyle}>
      <Form style={formStyle} className={"login-container"}>
        <Form.Group controlId="formBasicPlace">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Plaza Dorrego"
            onChange={handleChange}
            name="place"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicDireccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Av. Corrientes 6231"
            onChange={handleChange}
            name="address"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicneighborhood">
          <Form.Label>Barrio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Villa Crespo"
            onChange={handleChange}
            name="neighborhood"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicAttention">
          <Form.Label>Horario De Atencion</Form.Label>
          <Form.Control
            type="text"
            placeholder="12:00-18:00"
            onChange={handleChange}
            name="Attention"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </Form>
    </div>
  );
};
