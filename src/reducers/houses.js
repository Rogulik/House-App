import {
    CREATE_HOUSE,
    GET_HOUSES,
    GET_HOUSE,
    DELETE_HOUSE,
    ERROR_HOUSES,
  } from '../actions/types';
  
  const intitialState = {
    house: {},
    houses: [],
    loading: true,
    errors: {},
  };
  
  export default function (state = intitialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_HOUSES:
      case CREATE_HOUSE:
        return {
          ...state,
          houses: payload,
          loading: false,
        };
      case GET_HOUSE:
        return {
          ...state,
          house: payload,
          loading: false,
        };
      case DELETE_HOUSE:
        return {
          ...state,
          houses: state.houses.filter((house) => house.id_house !== payload),
          loading: false,
        };
      case ERROR_HOUSES:
        return {
          ...state,
          house: {},
          houses: [],
          loading: false,
          errors: payload,
        };
      default:
        return state;
    }
  }
  