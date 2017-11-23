import {ADD_ITEM,REMOVE_ITEM,COMPLETED} from '../action/actionType'

const idCreator = () => {
    let id_random = Math.floor(Math.random()*10000).toString();
    let id_time = new Date().getTime().toString();
    return id_random + id_time;
}

const dataListReducer = (state=[],action) => {
    switch (action.type) {
        case ADD_ITEM:{
            let newItem = {
                id: idCreator(),
                text: action.text,
                completed: false
            }
            return state.concat(newItem).reverse()
        }
        case REMOVE_ITEM:{
            return state.filter((v)=>(v.id !== action.id))
        }
        case COMPLETED:{
            return state.map((v)=>{
                if(v.id === action.id) {
                    return {...v,completed: !v.completed}
                }
                return v;
            })
        }
        default: {
            return state
        }
    }
}

export default dataListReducer;