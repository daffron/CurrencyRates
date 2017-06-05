import {DISPLAY_NEWS} from '../actions'

export function displayNews (state = false, action) {
    switch (action.type) {
        case DISPLAY_NEWS:
        return {
            displayNews: true
        }
        default:
        return state
    }
}

export default displayNews