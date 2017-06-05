import {SHOW_SEARCH} from '../actions'

export function showSearch (state = {amount: null, from: null }, action) {
  switch (action.type) {
    case SHOW_SEARCH:
      return {
        test: 'test',
        amount: action.amount,
        from: action.from
      }
    default:
      return state
  }
}

export default showSearch
