import * as c from './ActionTypes';


export const requestTrails = () => ({
    type: c.REQUEST_TRAILS
});


export const getTrailsSuccess = (trails) => ({
    type: c.GET_TRAILS_SUCCESS,
    trails
});


export const getTrailsFailure = (error) => ({
    type: c.GET_TRAILS_FAILURE,
    error
});


export const makeApiCall = () => {
    return (dispatch, getState) => {
        // https://www.learnhowtoprogram.com/react/react-with-apis/async-actions-with-redux-thunk
        //? The location state can be grabbed here, or passed in as args when makeApiCall is invoked
        //* The location state will be used to call the API with a users current location -geoCoords
        const { locationSlice } = getState();
        const lat = locationSlice.coords.latitude;
        const long = locationSlice.coords.longitude;
        // console.log("L: ", location.longitude);
        // console.log("L: ", location.latitude);
        // sets loading to true
        dispatch(requestTrails());
        fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxResults=10&maxDistance=10&key=${process.env.REACT_APP_HIKING_API_KEY}`)
        .then(res => res.json())
        .then(results => {
            // save trails to a results array, trails
            dispatch(getTrailsSuccess(results.trails));
        },
        (error) => {
            // sets state error message that there is a problem with geolocation
            dispatch(getTrailsFailure(error));
        });
    }
}
