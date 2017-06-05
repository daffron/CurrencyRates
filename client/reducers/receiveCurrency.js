import {RECEIVE_CURRENCY} from '../actions'

function receiveCurrency (state = '', action) {
  switch (action.type) {
    case RECEIVE_CURRENCY:
      return action.currency

    default:
      return state
  }
}

export default receiveCurrency
