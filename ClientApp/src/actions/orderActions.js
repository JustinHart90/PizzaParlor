import axios from 'axios';

export const GET_ALL_ORDERS_REQUEST = 'GET_ALL_ORDERS_REQUEST';
export const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';
export const GET_ALL_ORDERS_ERROR = 'GET_ALL_ORDERS_ERROR';

const getOrderSuccess = payload => ({
    type: GET_ALL_ORDERS_SUCCESS,
    payload
});

const getOrderError = payload => ({
    type: GET_ALL_ORDERS_ERROR,
    payload
});

export const getAllOrders = () => dispatch => {
    dispatch({type: GET_ALL_ORDERS_REQUEST});

    return axios.get('api/orders').then(res => {
        const response = res.data;
        dispatch(getOrderSuccess(response));
    }).catch(error => {
        dispatch(getOrderError('Something went wrong!'));
        return Promise.reject({});
    });
}