import * as types from './actionsTypes'

const initialState = {
   products:{},
   isLoading: false
};

const sacola = (state = initialState, action) => {
    switch (action.type) {
      case `${types.GET_PRODUCTS}_PENDING`:
      return{
          ...state,
          isLoading: true,
      };
  case `${types.GET_PRODUCTS}_FULFILLED`:
      return{
          ...state,
          isLoading: false,
          products:action.payload,
      };
  case `${types.GET_PRODUCTS}_REJECTED`:
      return{
          ...state,
          isLoading: true,
          products:{}
      };
        default:
            return state
    }
};
export default sacola
