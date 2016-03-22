import { NEXT_SLIDE, PREV_SLIDE, SET_SLIDE } from '../constants/ActionTypes';

export default (state = 0, action) => {
    switch (action.type) {
        case NEXT_SLIDE:
            return state + 1;
        case PREV_SLIDE:
            let s = state - 1;
            if (s >= 0) {
                return s;
            }
            else {
                return state;
            }
        case SET_SLIDE:
            let num = parseInt(action.slide);
            if (!isNaN(num)) {
                return num;
            }
            return state;
        default:
            return state;
    }
}