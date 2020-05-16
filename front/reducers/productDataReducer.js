import { DATA_PRODUCT } from "../constans"
const initialState = {
  dataProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_PRODUCT:
      return Object.assign({}, state, { dataProduct: action.dataProduct });
    default:
      return state;
  }
}
