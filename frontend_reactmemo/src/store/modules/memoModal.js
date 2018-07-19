import { createAction, handleActions } from 'redux-actions'
import * as api from 'lib/api'

// action types

const OPEN_MEMO_MODAL = 'memoModal/OPEN_MEMO_MODAL'
const TYPE_MEMO_TITLE = 'memoModal/TYPE_MEMO_TITLE'
const TYPE_MEMO_CONTENT ='memoModal/TYPE_MEMO_CONTENT'
const RESET_MEMO_STATE = 'memoModal/RESET_MEMO_STATE'
const LOAD_TARGET_MEMO_TITLE = 'memoModal/LOAD_TARGET_MEMO_TITLE'
const LOAD_TARGET_MEMO_CONTENT = 'memoModal/LOAD_TARGET_MEMO_CONTENT'
const HANDLE_READ_MODE = 'memoModal/HANDLE_READ_MODE'

const CREATE_MEMO = 'memoModal/CREATE_MEMO'
const CREATE_MEMO_SUCCESS = 'memoModal/CREATE_MEMO_SUCCESS'
const CREATE_MEMO_FAILURE = 'memoModal/CREATE_MEMO_FAILURE'

const ADD_LABEL_TO_MEMO = 'memoModal/ADD_LABEL_TO_MEMO'
const ADD_LABEL_TO_MEMO_SUCCESS = 'memoModal/ADD_LABEL_TO_MEMO_SUCCESS'
const ADD_LABEL_TO_MEMO_FAILURE = 'memoModal/ADD_LABEL_TO_MEMO_FAILURE'

const EDIT_MEMO = 'memoModal/EDIT_MEMO'
const EDIT_MEMO_SUCCESS = 'memoModal/EDIT_MEMO_SUCCESS'
const EDIT_MEMO_FAILURE = 'memoModal/EDIT_MEMO_FAILURE'



// action creators
export const openMemoModal = createAction(OPEN_MEMO_MODAL, v => v)
export const typeMemoTitle = createAction(TYPE_MEMO_TITLE, v => v)
export const typeMemoContent = createAction(TYPE_MEMO_CONTENT, v => v)
export const resetMemoState = createAction(RESET_MEMO_STATE, v => v)
export const loadTargetMemoTitle = createAction(LOAD_TARGET_MEMO_TITLE, v => v)
export const loadTargetMemoContent = createAction(LOAD_TARGET_MEMO_CONTENT, v => v)
export const handleReadMode = createAction(HANDLE_READ_MODE, v => v)
export const createMemo = (title,content,targetLabel) => dispatch => {
  dispatch({type:CREATE_MEMO})
  return api.createMemo(title,content)
  .then(
    res => {
      dispatch({
        type: CREATE_MEMO_SUCCESS,
        payload: res
      })
      return api.addLabelToMemo(targetLabel,[res.data._id])
    })
    .catch(
      err => {
        dispatch({
          type: CREATE_MEMO_FAILURE,
          payload: err
        })
        throw(err)
      })
}
export const addLabelToMemo = (labelId, memoIds) => dispatch => {
  dispatch({type:ADD_LABEL_TO_MEMO})
  return api.addLabelToMemo(labelId, memoIds)
  .then(
    res => {
      dispatch({
        type: ADD_LABEL_TO_MEMO_SUCCESS,
        payload: res
      })
    })
    .catch(
      err => {
        dispatch({
          type: ADD_LABEL_TO_MEMO_FAILURE,
          payload: err
        })
        throw(err)
      })
}

export const editMemo = (title, content, memoId) => dispatch => {
  dispatch({type: EDIT_MEMO})
  return api.editMemo(title, content, memoId)
  .then(
    res => {
      dispatch({
        type: EDIT_MEMO_SUCCESS,
        payload: res
      })
    })
    .catch(
      err => {
        dispatch({
          type: EDIT_MEMO_FAILURE,
          payload: err
        })
        throw(err)
      })
}

// initial State
const initialState = {
  isOpen: false,
  title : '',
  content: '',
  readMode: true
}

// reducer

export default handleActions({
  [OPEN_MEMO_MODAL] : (state, action) => ({
    ...state,
    isOpen: !(state.isOpen),
    readMode : true
  }),
  [TYPE_MEMO_TITLE] : (state, action) => ({
    ...state,
    title : action.payload
  }),
  [TYPE_MEMO_CONTENT] : (state, action) => ({
    ...state,
    content: action.payload
  }),
  [RESET_MEMO_STATE] : (state, action) => ({
    ...state,
    title : '',
    content: ''
  }),
  [LOAD_TARGET_MEMO_TITLE] : (state, action) => ({
    ...state,
    title : action.payload,
  }),
  [LOAD_TARGET_MEMO_CONTENT] : (state, action) => ({
    ...state,
    content : action.payload,
  }),
  [HANDLE_READ_MODE] : (state, action) => ({
    ...state,
    readMode : false
  })
 }, initialState)