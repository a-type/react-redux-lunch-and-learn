import { combineReducers } from 'redux';
import currentSlide from './currentSlide';
import guess from './guess';
import profile from './profile';

const rootReducer = combineReducers({
    currentSlide,
    guess,
    profile
});

export default rootReducer;
