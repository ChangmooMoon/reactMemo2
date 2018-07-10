import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

// action types
const CHOOSE_LABEL = 'label/CHOOSE_LABEL'
const RESET_CHOSEN_LABEL = 'label/RESET_CHOSEN_LABEL'

// action creators
export const chooseLabel = createAction(CHOOSE_LABEL, value => value)
export const resetChosenLabel = createAction(RESET_CHOSEN_LABEL, value => value)

// initial State
const initialState = Map({
  chosenLabel : null
})

// reducer

export default handleActions({
  [CHOOSE_LABEL] : (state, action) => {
    return state.set('chosenLabel', action.payload)
  },
  [RESET_CHOSEN_LABEL] : (state, action) => {
    return state.set('chosenLabel', null)
  }
}, initialState)