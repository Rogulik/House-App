    import {
        CREATE_HOUSE,
        GET_HOUSES,
        GET_HOUSE,
        DELETE_HOUSE,
        ERROR_HOUSES,
    } from './types';
  import axios from 'axios';

  //get the Houses
  export const getHouses = () => async (dispatch) => {
    try {
      const res = await axios.get(`http://mr-test-backend.sadek.usermd.net/houses`);
      dispatch({
        type: GET_HOUSES,
        payload: res.data.houses,
      });
    } catch (error) {
      dispatch({
        type: ERROR_HOUSES,
        payload: { error: error },
      });
    }
  };
 
  export const getHouse = (houseId) => async (dispatch) => {
    try {
      const res = await axios.get(`http://mr-test-backend.sadek.usermd.net/houses/${houseId}`);
      dispatch({
        type: GET_HOUSE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_HOUSES,
        payload: { error: error.msg },
      });
    }
  };
  
  
  export const createHouse = (formData, history) => async (dispatch) => {
    try {
      const res = await axios.post(`http://mr-test-backend.sadek.usermd.net/houses`, formData);
  
      dispatch({
        type: CREATE_HOUSE,
        payload: res.data,
      });
  
      history.push(`/houses-list`);
    } catch (error) {
      dispatch({
        type: ERROR_HOUSES,
        payload: { error: error.msg },
      });
    }
  };
  
 
  export const deleteHouse = (houseId) => async (dispatch) => {
    try {
      await axios.delete(`http://mr-test-backend.sadek.usermd.net/houses/${houseId}`);
  
      dispatch({
        type: DELETE_HOUSE,
        payload: houseId,
      });
  
    } catch (error) {
      dispatch({
        type: ERROR_HOUSES,
        payload: { error: error.msg },
      });
    }
  };