import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from "redux-thunk" 

import crimes from '../api/crimes';

const initialLocations = [{
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
}];

export const getCrime = (lat, long, date = '2021-01') => {
    return () => {
        crimes.getCrimeByLocationAndDate(lat, long, date)
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err));
    }
}

export const currentLocation = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return action.payload;
        default:
            return state;
    }
};

export const results = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_RESULTS':
            return state;
        default:
            return state;
    }
};

export const locations = (state = initialLocations, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const reducers = combineReducers({
    currentLocation,
    results,
    locations,
});

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);