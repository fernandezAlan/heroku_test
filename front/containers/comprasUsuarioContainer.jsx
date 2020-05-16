import React from "react";
import { connect } from "react-redux";
import ComprasUsuario from "../components/comprasUsuario";
import { getOrderUser, getPuntoDeEncuentro } from "../actions/orderActions";
const mapStateToProps = (state) => {
  return {
    puntosDeEncuentro: state.orders.PuntoDeEncuentro,
    orders: state.orders.userOrders,
    user: state.user.user,
    allStyles: state.products.allStyles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPuntoDeEncuentro: () => dispatch(getPuntoDeEncuentro()),
    getOrderUser: () => dispatch(getOrderUser()),
  };
};

class perfilUser extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getOrderUser();
    this.props.getPuntoDeEncuentro();
  }

  render() {
    return (
      <>
        <h3 className="titulopagina">Tus ordenes</h3>
        <ComprasUsuario
          orders={this.props.orders}
          user={this.props.user}
          allStyles={this.props.allStyles}
          puntosDeEncuentro={this.props.puntosDeEncuentro}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(perfilUser);
