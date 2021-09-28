import { combineReducers, createStore } from 'redux';

const locations = [{
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

const initialState = {
    locations,
    dataResults: [],
    currentLocation: 0,
};

export const updateLocation = () => ({
    type: 'UPDATE_LOCATION',
});


export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return state;
        default:
            return state;
    }
};

const reducers = combineReducers({
    dataReducer,
});

export function configureStore() {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();