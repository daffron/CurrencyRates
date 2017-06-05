import {
  SHOW_ERROR,
  REQUEST_CURRENCY,
  RECEIVE_CURRENCY,
  RECEIVE_LIST,
  SHOW_NEWS
} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CURRENCY:
      return true

    case RECEIVE_CURRENCY:
      return false

    case SHOW_ERROR:
      return false

      case RECEIVE_LIST:
      return false

      case SHOW_NEWS:
      return false

    default:
      return state
  }
}

export default waiting
