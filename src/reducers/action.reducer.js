import Immutable from 'seamless-immutable';

import  { SET_ACTION } from '../actions';

const DEFAULT_STATE = Immutable({selected: '', action: ''});

const action = (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case SET_ACTION:
            return action.payload ? Immutable(action.payload) : DEFAULT_STATE;
    }

    return state;
};

export default action;