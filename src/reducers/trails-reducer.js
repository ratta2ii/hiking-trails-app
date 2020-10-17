import * as c from '../actions/ActionTypes';


let initialState = {
    isLoading: false,
    trails: [],
    error: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case c.REQUEST_TRAILS:
            return Object.assign({}, state, {
                isLoading: true
            });
        case c.GET_TRAILS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                trails: action.trails
            });
        case c.GET_TRAILS_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });    
        default:
            return state;
    }
};






//! This is where all actions were combined to a single reducer
// import * as c from '../actions/ActionTypes';


// let initialState = {
//     isLoading: false,
//     trails: [],
//     error: null,
//     location: {
//         longitude: null,
//         latitude: null,
//     },
//     locationError: null,
// }


// export default (state = initialState, action) => {
//     switch (action.type) {
//         case c.REQUEST_TRAILS:
//             return Object.assign({}, state, {
//                 isLoading: true
//             });
//         case c.GET_TRAILS_SUCCESS:
//             return Object.assign({}, state, {
//                 isLoading: false,
//                 trails: action.trails
//             });
//         case c.GET_TRAILS_FAILURE:
//             return Object.assign({}, state, {
//                 isLoading: false,
//                 error: action.error
//             });
//         case c.GET_LOCATION_LONG_LAT:
//             // console.log("Made it into GET_LOCATION_LONG_LAT reducer!");
//             return (Object.assign({}, state, {
//                 location: action.location
//             }));
//         case c.GET_LOCATION_FAILURE:
//             console.log("Error getting coordinates!");
//             return (Object.assign({}, state, {
//                 locationError: action.error
//             }));      
//         default:
//             return state;
//     }
// }



