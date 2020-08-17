
export const Types = {
    add: 'ADD_ITEM',
    remove: 'REMOVE_ITEM'
}


export const INITIALIZE_STATE = []

const reducerItems = (state = INITIALIZE_STATE, action) => {

    switch (action.type) {
        case Types.add:
            return [{ id: Math.random(), text: action.payload.text }, ...state]
        case Types.remove:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state;
    }

}

export const Creators = {

    addItem: (text) => ({
        type: Types.add,
        payload: {
            text
        }
    }),

    removeItem: (id) => ({
        type: Types.remove,
        payload: {
            id
        }
    })

}

export default reducerItems;