import * as c from '../actions/ActionTypes';


let initialState = {
    error: null,
    coords: {
        longitude: null,
        latitude: null,
    }
}


export default (state = initialState, action) => {
    switch (action.type) {
        case c.GET_LOCATION_FAILURE:
            return Object.assign({}, state, {
                error: action.error
            });
        case c.GET_LOCATION_LONG_LAT:
            return (Object.assign({}, state, {
                coords: action.coords
            }));
        default:
            return state;
    }
};