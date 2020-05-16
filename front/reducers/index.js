
import { combineReducers } from "redux";
import LoginReducer from "./loginReducer"
import productDataReducer from "./productDataReducer"
import CartReducer from "./cartReducer"
import ProductReducer from "./productsReducer"
import OrderReducer from "./orderReducer"
import AdminReducer from "./adminReducer"

export default combineReducers({
  user:LoginReducer,
  dataProducts:productDataReducer,
  cart:CartReducer,
  products:ProductReducer,
  orders:OrderReducer,
  admin:AdminReducer
});

