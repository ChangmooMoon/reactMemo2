import { handleActions } from 'redux-actions'
import * as api from 'lib/api'

// action types
const GET_LABEL_PENDING = 'db/GET_LABEL_PENDING'
const GET_LABEL_SUCCESS = 'db/GET_LABEL_SUCCESS'
const GET_LABEL_FAILURE = 'db/GET_LABEL_FAILURE'

const GET_ALL_MEMOLIST_PENDING = 'db/GET_ALL_MEMOLIST_PENDING'
const GET_ALL_MEMOLIST_SUCCESS = 'db/GET_ALL_MEMOLIST__SUCCESS'
const GET_ALL_MEMOLIST_FAILURE = 'db/GET_ALL_MEMOLIST_FAILURE'

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

export const getAllMemoList = () => dispatch => {
  dispatch({type:GET_ALL_MEMOLIST_PENDING})
  return api.getAllMemoList()
    .then(
      res => {
        dispatch({
          type: GET_ALL_MEMOLIST_SUCCESS,
          payload: res
        })
    })
    .catch(
      err => {
        dispatch({
          type: GET_ALL_MEMOLIST_FAILURE,
          payload: err
        })
        throw(err)
      })
}

// initial State
const initialState = {
  pending: false,
  error : false,
  labelData: null,
  memoData: null
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
      labelData : action.payload.data
    }
  },
  [GET_LABEL_FAILURE] : (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    }
  },
  [GET_ALL_MEMOLIST_SUCCESS] : (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    }
  },
  [GET_ALL_MEMOLIST_SUCCESS] : (state, action) => {
    return {
      ...state,
      pending: false,
      memoData : action.payload.data
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