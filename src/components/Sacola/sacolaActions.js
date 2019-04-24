import * as types from './actionsTypes';
import sacolaApi from './sacolaApi'

export const getProducts = () => {
    return dispatch => {
        return dispatch({
            type: types.GET_PRODUCTS,
            payload: sacolaApi.getProducts()
        })
    }
};
