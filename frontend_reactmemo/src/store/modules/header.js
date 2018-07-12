import { createAction, handleActions } from 'redux-actions'

// action types
const TOGGLE_HAMBURGER_MODAL = 'label/TOGGLE_HAMBURGER_MODAL'
const SEARCH_KEYWORD= 'label/SEARCH_WORD'

// action creators
export const toggleHamburgerModal = createAction(TOGGLE_HAMBURGER_MODAL, value => value)
export const changeSearchKeyword = createAction(SEARCH_KEYWORD, value => value)

// initial State
const initialState = {
  isHamburgerModalOn: false,
  keyword: '',
}

// reducer

export default handleActions({
  [TOGGLE_HAMBURGER_MODAL] : (state, action) => ({
    ...state,
    isHamburgerModalOn : !(state.isHamburgerModalOn)
  }),
  [SEARCH_KEYWORD] : (state,action) => ({
    ...state,
    keyword: action.payload
  })
}, initialState)