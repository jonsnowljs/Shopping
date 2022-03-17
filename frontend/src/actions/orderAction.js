import axios from 'axios';
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../constants/orderConstants';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    console.log(order);

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Content_type: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // user is the request body data
    const { data } = await axios.post(`/api/orders`, order, config);

    console.log(data);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
