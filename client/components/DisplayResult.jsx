import React from 'react'
import {connect} from 'react-redux'
import {fetchNews} from '../actions/'
import WaitIndicator from './WaitIndicator'


const DisplayResult = (props) => {
        return (
            <div>
                {props.showIs&&props.waiting && <h4>{props.amount}{props.from} is {props.result } {props.currency}</h4>}
            </div>
        )
function getNews(searchTerm){
    props.dispatch(fetchNews(searchTerm))
}
    }


function mapStateToProps (state) {
    return {
        result: state.receiveCurrency,
        currency: state.currencySuffix,
        amount: state.showSearch.amount,
        from: state.showSearch.from,
        showIs: state.displayNews,
        waiting: !state.waiting
    }
}

    export default connect(mapStateToProps)(DisplayResult)