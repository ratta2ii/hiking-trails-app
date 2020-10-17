import { combineReducers } from 'redux';
import locationReducer from './location-reducer';
import trailsReducer from './trails-reducer';

const rootReducer = combineReducers({
    trailsSlice: trailsReducer,
    locationSlice: locationReducer,
});

export default rootReducer;