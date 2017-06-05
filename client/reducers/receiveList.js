import {RECEIVE_LIST} from '../actions'

function receiveList (state = [], action) {
  switch (action.type) {
    case RECEIVE_LIST:
      return action.list

    default:
      return state
  }
}

export default receiveList
