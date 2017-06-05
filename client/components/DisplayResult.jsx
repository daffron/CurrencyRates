import React from 'react'
import {connect} from 'react-redux'
import {fetchNews} from '../actions/'
import WaitIndicator from './WaitIndicator'

const DisplayResult = (props) => {
  return (
    <div className='text-center'>
      {props.showIs && props.waiting && <h4><span className='results'>{props.amount }</span> {props.from}&nbsp; is &nbsp;<span className='results'>{props.result }          </span> {props.currency}</h4>}
    </div>
  )
  function getNews (searchTerm) {
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
