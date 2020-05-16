import React, { useState } from "react";
import { Collapse, Button, CardBody } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { Card, Popover, OverlayTrigger, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default ({ orders, user, allStyles, puntosDeEncuentro }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const puntoStyle = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0,0)",

    justifyContent: "center",
    paddingBlockEnd: "3rem",
  };

  let orderUser = orders.orders;
  let productsData = orders.productData;

  const styleUser = {
    width: "50%",
    backgroundColor: "white",
    marginLeft: "25%",
    marginBottom: "10%",
  };

  return (
    <Container style={puntoStyle}>
      {orderUser ? (
        orderUser.map((e, i) => {
          let selectedStyle = null;
          let total = 0;
          let toggleOrder = {
            display: "inline-block",
          };

          let selected_P_E = puntosDeEncuentro.filter((p) => {
            return e.puntoDeEncuentroId === p.id;
          });
          selected_P_E = selected_P_E[0];
          if (selected_P_E) {
            toggleOrder.display = "none";
          } else {
            toggleOrder.display = "inline-block";
          }
          let productDataUser = productsData.filter((f) => {
            selectedStyle = allStyles.filter((style) => {
              return f.styleId === style.id;
            });
            total += f.price;
            return f.orderId === e.id;
          });
          const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">
                Tenés {productDataUser.length}
                {productDataUser.length > 1 ? (
                  <span> productos </span>
                ) : (
                  <span>producto</span>
                )}
              </Popover.Title>
              <Popover.Content
                style={{
                  backgroundColor: "#f7f4ed",
                  maxHeight: "400px",
                  overflow: "scroll",
                }}
              >
                <p>
                  {" "}
                  {productDataUser.map((e, i) => {
                    return (
                      <Container
                        style={{
                          marginBlockEnd: "15px",
                          borderBottom: "1px solid grey",
                        }}
                        key={i}
                      >
                        <span>
                          <strong>Producto: </strong>
                          {i+1}
                        </span>
                        <br />
                        <span>
                          <strong>Tamaño: </strong>
                          {e.size + " "}
                        </span>
                        <br />
                        <span>
                          <strong>Estilo: </strong>
                          {selectedStyle[0]
                            ? selectedStyle[0].name + " "
                            : null}
                        </span>
                        <br />
                        {e.digital ? (
                          <strong>Digital</strong>
                        ) : (
                          <span>
                            <strong>Marco:</strong> {e.frame}
                          </span>
                        )}
                        <br />
                        <strong>Fecha: </strong>
                        <span>{e.date}</span>
                        <br />
                        <span>
                          <strong>Color: </strong>
                          {selectedStyle[0]
                            ? selectedStyle[0].color + " "
                            : null}
                        </span>
                        <br />

                        <strong>Nombre o frase: </strong>
                        {e.name}
                        <span></span>
                        <br />
                        <strong>Hora:</strong>
                        <span>{e.time}</span>
                        <br />
                        <strong>Idioma: </strong>
                        <span>{e.language}</span>
                        <br />
                      </Container>
                    );
                  })}
                </p>
              </Popover.Content>
            </Popover>
          );
          return (
            <div key={i}>
              <Card
                key={i}
                className="tarjetaproducto"
                style={{ width: "16rem", margin: "25px", color: "#102f51" }}
              >
                <Card.Body>
                  <Card.Title>Orden N° {e.id}</Card.Title>
                  <Card.Text>
                    {selected_P_E ? (
                      <span>
                        <strong>punto de entrega:</strong>
                        {selected_P_E.address}
                      </span>
                    ) : null}
                  </Card.Text>
                  <Card.Text>
                    <strong>direccion:</strong>
                    <span>{e.address}</span>
                  </Card.Text>
                  <Card.Text>
                    <strong>pais: </strong>
                    <span>{e.country}</span>
                    <br />
                  </Card.Text>

                  <Card.Text>
                    <strong>provincia: </strong>
                    <span>{e.state}</span>
                    <br />
                  </Card.Text>
                  <Card.Text>
                    <strong>ciudad: </strong>
                    <span>{e.city}</span>
                    <br />
                  </Card.Text>
                  <Card.Text>
                    <h2>${total}</h2>
                  </Card.Text>
                  <>
                    <OverlayTrigger
                      rootClose={true}
                      trigger="click"
                      placement="top"
                      overlay={popover}
                    >
                      <Button className="boton-solido" size="sm">
                        Detalles de la orden
                      </Button>
                    </OverlayTrigger>
                  </>
                </Card.Body>
              </Card>
            </div>
          );
        })
      ) : (
        <span style={{ color: "white" }}>aun no tienes compras</span>
      )}
    </Container>
  );
};
