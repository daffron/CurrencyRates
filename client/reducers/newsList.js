import {SHOW_NEWS} from '../actions'

function showNews (state = [{url: null}, {url: null}], action) {
  switch (action.type) {
    case SHOW_NEWS:
      return action.news

    default:
      return state
  }
}

export default showNews
