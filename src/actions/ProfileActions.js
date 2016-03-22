import { CHANGE_PROFILE_NAME } from '../constants/ActionTypes';

export function setName (name) {
    return {
        type: CHANGE_PROFILE_NAME,
        name
    };
}
