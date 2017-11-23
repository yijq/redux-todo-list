import { VISIBLE_FILTER } from '../action/actionType';

const visibleListReducer = (state = "GET_ALL",action) => {
    switch(action.type) {
        case VISIBLE_FILTER:{
            return action.filter
        }
        default: {
            return state
        }
    }
}

export default visibleListReducer;