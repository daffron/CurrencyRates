import {CURRENCY_SUFFIX} from '../actions'

function currencySuffix (state = '', action) {
  switch (action.type) {
    case CURRENCY_SUFFIX:
      return action.currency

    default:
      return state
  }
}

export default currencySuffix
