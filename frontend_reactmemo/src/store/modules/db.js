import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import * as api from 'lib/api'

// action types
const GET_LABEL_LIST = 'db/GET_LABEL_LIST'

// action creators
export const getLabelList = createAction(GET_LABEL_LIST, api.getLabelList)

// initial State
const initialState = {
  targetLabel : null,
  db: null
}

// reducer

export default handleActions({
  [GET_LABEL_LIST] : (state, action) => ({
    ...state,
    db : getLabelList()
  })
}, initialState)