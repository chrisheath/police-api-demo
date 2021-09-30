import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk"

const tmpDate = new Date();

const initialState = {
  locations: [{
    id: 0,
    name: 'Wales',
    lat: '52.515249',
    long: '-3.316378',
  }, {
    id: 1,
    name: 'Sussex',
    lat: '50.827741',
    long: '-0.138776',
  }, {
    id: 2,
    name: 'Norfolk',
    lat: '52.906099',
    long: '1.088307',
  }, {
    id: 3,
    name: 'Yorkshire',
    lat: '54.486599',
    long: '-0.615556',
  }],
  currentYear: tmpDate.getFullYear(),
  currentMonth: tmpDate.getMonth() + 1,
  currentLocation: null,
  results: [],
};

export const reducers = (state = initialState, action) => {
  if (action.type === 'UPDATE_YEAR') {
    return Object.assign({}, state, {
      currentYear: action.payload,
    });
  }

  if (action.type === 'UPDATE_MONTH') {
    return Object.assign({}, state, {
      currentMonth: action.payload,
    });
  }

  if (action.type === 'UPDATE_LOCATION') {
    return Object.assign({}, state, {
      currentLocation: action.payload,
    });
  }

  if (action.type === 'UPDATE_RESULTS') {
    return Object.assign({}, state, {
      results: action.payload,
    });
  }

  return state;
};

export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
