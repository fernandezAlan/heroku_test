import React from 'react'
import Landing from '../components/Landing'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getCart} from "../actions/cartActions"
import {addLogin} from "../actions/LoginAction"


const mapStateToProps = (state, ownprops) => {
  return {
     
      emailUser: state.user.user.email
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getCart: ()=>dispatch(getCart()),
      addLogin: (user)=>dispatch(addLogin(user))
    };
  };




class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)

    }

  componentDidMount(){
    if(this.props.emailUser){
      this.props.getCart()
    }
  }
  handleClick(e) {
      this.props.history.push('/products/getproducts')
    }

  render() {
      return (
              <Landing handleClick={this.handleClick} />
      )
  }
}




export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
);

    
   
        
  
    
    

     
      
        


