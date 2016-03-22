import { CHANGE_PROFILE_NAME } from '../constants/ActionTypes';

const defaultState = {
    name: 'John Doe',
    title: 'Software Developer'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_PROFILE_NAME:
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
}