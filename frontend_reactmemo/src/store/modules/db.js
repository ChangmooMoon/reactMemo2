import { handleActions } from 'redux-actions'
import * as api from 'lib/api'

// action types
const GET_LABEL_PENDING = 'db/GET_LABEL_PENDING'
const GET_LABEL_SUCCESS = 'db/GET_LABEL_SUCCESS'
const GET_LABEL_FAILURE = 'db/GET_LABEL_FAILURE'

// action creators
export const getLabelList = () => dispatch => {
  dispatch({type:GET_LABEL_PENDING})
  return api.getLabelList()
    .then(
      res => {
        dispatch({
          type: GET_LABEL_SUCCESS,
          payload: res
        })
    })
    .catch(
      err => {
        dispatch({
          type: GET_LABEL_FAILURE,
          payload: err
        })
        throw(err)
      })
}

// initial State
const initialState = {
  pending: false,
  error : false,
  data: null
}

// reducer
export default handleActions({
  [GET_LABEL_PENDING] : (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    }
  },
  [GET_LABEL_SUCCESS] : (state, action) => {
    return {
      ...state,
      pending: false,
      data : action.payload.data
    }
  },
  [GET_LABEL_FAILURE] : (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    }
  }
}, initialState)