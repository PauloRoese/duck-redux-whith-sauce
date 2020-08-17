import { combineReducers } from 'redux';

import reducerItems from './reducerItems'

const reducers = combineReducers({
    items: reducerItems
});

export default reducers;