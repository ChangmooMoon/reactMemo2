import { createAction, handleActions } from 'redux-actions'
import * as api from 'lib/api'

// action types
const CLICK_TARGET_MEMO = 'memoList/CLICK_TARGET_MEMO'
const DELETE_MEMO = 'memoList/DELETE_MEMO'

// action creators
export const clickTargetMemo = createAction(CLICK_TARGET_MEMO, v => v)
export const deleteMemo = (memoId) => dispatch => {
  dispatch({type: DELETE_MEMO})
  return api.deleteMemo(memoId)
}

// initial State
const initialState = {
  targetMemo : null
}

// reducer

export default handleActions({
  [CLICK_TARGET_MEMO] : (state, action) => ({
    targetMemo : action.payload
  })
}, initialState)