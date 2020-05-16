import {CART} from "../constans"
const initialState = {
  dataProducts:[],
  
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case CART: 
         return Object.assign({}, state, {
          dataProducts:action.dataProducts,
           
         });
         default: 
         return state;
        }
      }
      
      
      
      
      
     
      