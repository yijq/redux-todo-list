import dataListReducer from './dataListReducer';
import visibleListReducer from './visibleListReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({dataListReducer,visibleListReducer});
export default reducer;