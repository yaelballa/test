import Immutable from 'seamless-immutable';

import  { LOAD_COMMENTS } from '../actions';

const DEFAULT_STATE = Immutable([]);

const comments = (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case LOAD_COMMENTS:
            return action.error ? DEFAULT_STATE : Immutable(action.payload.data);
    }

    return state;
};

export default comments;