import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import modules from './modules'

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const middleware = [ReduxThunk]
  const store = createStore(modules,devTools,applyMiddleware(...middleware))
  return store
}


export default configure