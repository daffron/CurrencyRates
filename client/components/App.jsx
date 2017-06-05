import React from 'react'

import {connect} from 'react-redux'
// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import DisplayForm from './DisplayForm'
import DisplayResult from './DisplayResult'

import {fetchCurrencyList} from '../actions'

class App extends React.Component {




componentDidMount () {
  this.props.dispatch(fetchCurrencyList())
}

  render () {
    return (

  <div className='app'>
    <DisplayForm />
    <WaitIndicator />
    <DisplayResult />
  </div>

    )
  }
}

export default connect()(App)
