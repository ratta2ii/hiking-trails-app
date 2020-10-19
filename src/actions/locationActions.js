import * as c from './ActionTypes';


export const getLocationFailure = (error) => ({
    type: c.GET_LOCATION_FAILURE,
    error
});


export const getLocation = (coords) => ({
    type: c.GET_LOCATION_LONG_LAT,
    coords
});


export const getGeoLocation = () => {
    console.log("inside getGeoLocation");
    return (dispatch, getState) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let coords = {
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                };
                dispatch(getLocation(coords));
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
            dispatch(getLocationFailure("There has been an error getting user location"));
        }
    }
}

