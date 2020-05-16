import React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import {userLogin,addLogin} from "../actions/LoginAction"
import {encrypt} from "../actions/RegisterAction"

const mapDispatchToProps = (dispatch, state) => {
  return {
    addLogin: (user)=>{dispatch(addLogin(user))}
  };
};

const mapStateToProps = (state, ownprops) => {
  return {
    

  };
};

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      alertNull: false,
      alertPass: false,
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  checkboxLogin(){
    this.setState({checkbox:!this.state.checkbox})
  }

  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
    
  }

  handleSubmit(e) {
    e.preventDefault();
    
     let encryptPass=encrypt(this.state.password)
      localStorage.setItem("email",this.state.email)
      localStorage.setItem("pass",encryptPass)
    
    if(this.state.password.length === 0 ||this.state.email.length === 0){
      this.setState({alertNull:true})
      this.setState({alertPass:false})
    }
    else{
      userLogin(this.state).then((user)=>{
      if(user.data.success===false){
          this.setState({alertPass:true})
          this.setState({alertNull:false})
      }else{
        this.props.addLogin(user.data)
        this.props.history.push("/home")

      }
        
      })
     
    }
  }
    

  render() {
  
    return (
      <div>
        <Login
          handleChange={this.handleChange}
         
          handleSubmit={this.handleSubmit}
          alertNull={this.state.alertNull}
          alertPass={this.state.alertPass}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);

