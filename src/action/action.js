import * as actionType from './actionType';

export const addItem = (text) => ({
    type: actionType.ADD_ITEM,
    text: text
})

export const removeItem = (id) => ({
    type: actionType.REMOVE_ITEM,
    id: id
})

export const completed = (id) => ({
    type: actionType.COMPLETED,
    id: id
})


// export const getAll = () => ({
//     type: actionType.GET_ALL
// })

// export const getCompleted = () => ({
//     type: actionType.GET_COMPLETED
// })

// export const getUncompleted = () => ({
//     type: actionType.GET_UNCOMPLETED
// })
export const visibleFilter = (filter_type) => ({
    type: actionType.VISIBLE_FILTER,
    filter: filter_type
})
