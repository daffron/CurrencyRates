import React from 'react'

import {connect} from 'react-redux'
// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import DisplayForm from './DisplayForm'
import DisplayResult from './DisplayResult'
import News from './News'

import {fetchCurrencyList} from '../actions'

class App extends React.Component {





componentDidMount () {
  this.props.dispatch(fetchCurrencyList())
}

  render () {
    return (

  <div className='app'>
    {!this.props.showform && < DisplayForm />}
    <WaitIndicator />
    <DisplayResult />
    {this.props.showNews && <News /> }
  </div>

    )
  }
}


function mapStateToProps (state) {
  return {
    showform:state.waiting,
    showNews: state.displayNews
  }
}

export default connect(mapStateToProps)(App)
