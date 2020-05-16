import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div
        style={{
            backgroundColor: "#f7f4ed",
            height: "100%",
            position: "relative",
            left: "0px",
            padding: "15px",
            color: "#102f51",
            fontSize: "15px",
            textAlign:'center'
        }}
    >
        <div>
            <br />

            <p style={{ fontWeight: "700" }}>ADMIN</p>
            <Link to="/admin/getOrders">
                <p>Órdenes</p>
            </Link>
            <Link to="/addProducts">
                <p>Administrar Variables</p>
            </Link>

            <Link to="/admin/getUsers">
                <p>Usuarios</p>
            </Link>

            <Link to="/admin/newPunto">
                <p>Puntos de entrega</p>
            </Link>
        </div>
    </div>
);