import { combineReducers } from 'redux';

import list from './list.reducer';
import action from './action.reducer';

const rootReducer = combineReducers({
    list,
    action
});

export default rootReducer;