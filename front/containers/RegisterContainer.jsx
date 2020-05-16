import React from "react";
import Register from "../components/Register";
import { userRegister } from "../actions/RegisterAction";
import { connect } from "react-redux";

class RegisterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    let key = e.target.name;
    this.setState({ [key]: value });
  }

  handleClick(evento) {
    evento.preventDefault();
    userRegister(this.state);
    this.props.history.push("/home");
  }

  render() {
    return (
      <div>
        <h3 className="titulopagina">Registro</h3>

        <Register
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default connect(null, null)(RegisterContainer);
