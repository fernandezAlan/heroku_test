import {LOGIN_USER} from "../constans"
const initialState = {
    user:{}
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER: 
         return Object.assign({}, state, { user: action.user });
         default: 
            return state;
       }
     }
      