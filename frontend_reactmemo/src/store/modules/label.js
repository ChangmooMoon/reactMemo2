import { createAction, handleActions } from 'redux-actions'
import * as api from 'lib/api'

// action types
const ONCHANGE_TARGET_LABEL = 'label/ONCHANGE_TARGET_LABEL'
const ADD_LABEL_MODE = 'label/ADD_LABEL_MODE'
const ONCHANGE_NEW_LABEL_NAME = 'label/ONCHANGE_NEW_LABEL_NAME'
const ENROLL_LABEL = 'label/ENROLL_LABEL'
const ENROLL_LABEL_SUCCESS = 'label/ENROLL_LABEL_SUCCESS'
const ENROLL_LABEL_FAILURE = 'label/ENROLL_LABEL_FAILURE'

// action creators
export const onChangeTargetLabel = createAction(ONCHANGE_TARGET_LABEL, v => v)
export const addLabel = createAction(ADD_LABEL_MODE, v => v)
export const onChangeNewLabelName = createAction(ONCHANGE_NEW_LABEL_NAME, v => v)
export const enrollLabel = (title) => dispatch => {
  dispatch({type:ENROLL_LABEL})
  return api.enrollNewLabel(title)
    .then(
      res => {
        dispatch({
          type: ENROLL_LABEL_SUCCESS,
          payload: res
        })
      })
      .catch(
        err => {
          dispatch({
            type: ENROLL_LABEL_FAILURE,
            payload: err
          })
          throw(err)
        })
}
// initial State
const initialState = {
  targetLabel : 'All',
  addLabelMode: false,
  newLabelName: null
}

// reducer

export default handleActions({
  [ONCHANGE_TARGET_LABEL] : (state, action) => ({
    ...state,
    targetLabel : action.payload
  }),
  [ADD_LABEL_MODE] : (state, action) => ({
    ...state,
    addLabelMode : !(state.addLabelMode),
  }),
  [ONCHANGE_NEW_LABEL_NAME] : (state, action) => ({
    ...state,
    newLabelName : action.payload
  })
}, initialState)