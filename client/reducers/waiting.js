import {
  SHOW_ERROR,
  REQUEST_CURRENCY,
  RECEIVE_CURRENCY} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CURRENCY:
      return true

    case RECEIVE_CURRENCY:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
