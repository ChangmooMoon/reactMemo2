import { combineReducers } from 'redux'

import label from './label'
import memoList from './memoList'
import memo from './memo'

export default combineReducers({
  label,
  memoList,
  memo
})