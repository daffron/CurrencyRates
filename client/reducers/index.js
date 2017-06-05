import {combineReducers} from 'redux'

import errorMessage from './error-message'
import receiveCurrency from './receiveCurrency'
import receiveList from './receiveList'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  receiveCurrency,
  receiveList,
  waiting
})

