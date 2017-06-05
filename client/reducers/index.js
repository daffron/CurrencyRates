import {combineReducers} from 'redux'

import errorMessage from './error-message'
import receiveCurrency from './receiveCurrency'
import receiveList from './receiveList'
import waiting from './waiting'
import currencySuffix from './currencySuffix'
import newsList from './newsList'
import displayNews from './displayNews'
import showSearch from './showSearch'

export default combineReducers({
  errorMessage,
  receiveCurrency,
  receiveList,
  waiting,
  currencySuffix,
  newsList,
  displayNews,
  showSearch

})

