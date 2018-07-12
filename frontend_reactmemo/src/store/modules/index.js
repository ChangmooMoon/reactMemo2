import { combineReducers } from 'redux'

import header from './header'
import label from './label'
import memoList from './memoList'
import memoModal from './memoModal'
import hamburgerModal from './hamburgerModal'



export default combineReducers({
  header,
  label,
  memoList,
  memoModal,
  hamburgerModal
})