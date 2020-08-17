import { createActions, createReducer } from 'reduxsauce';

export const INITIALIZE_STATE = []

export const { Types, Creators } = createActions({
    addItem: ['text'],
    removeItem: ['id']
})
export const add = (state = INITIALIZE_STATE, action) => (
    [{ id: Math.random(), text: action.text }, ...state]
)
export const remove = (state = INITIALIZE_STATE, action) => (
    state.filter(item => item.id !== action.id)
)
export default createReducer(INITIALIZE_STATE, {
    [Types.ADD_ITEM]: add,
    [Types.REMOVE_ITEM]: remove,
});