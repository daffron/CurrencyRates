import React from 'react'
import {connect} from 'react-redux'
import {fetchCurrency, fetchNews} from '../actions'


class DisplayForm extends React.Component {
  constructor(props) {
    super(props)
this.state = {
      from:'NZD',
      q:null,
      to:'USD'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(fetchCurrency(this.state.from, this.state.q, this.state.to))
    this.props.dispatch(fetchNews(this.props.to))
  }

  handleChange(e) {
    this.setState({
        [e.target.name]:e.target.value
    })
  }

render () {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className="form-add">
        <label for="from">From:</label>
          <select name="from" className='form-control' onChange={this.handleChange}>
            {this.props.list.map((item) => {
              return(
                <option value={item}>{item}</option>
              )
            })}          
            </select><br />
        <label for="amount">Amount:</label>            
            <input type="number" name="q" onChange={this.handleChange} className='form-control' placeholder="Currency"/><br/>
        <label for="to">To:</label>        
            <select name="to" className='form-control' onChange={this.handleChange}>
            {this.props.list.map((item) => {
              return(
                <option value={item}>{item}</option>
              )
            })}                   
          </select><br/>
          <button className='btn  btn-primary btn-block'> Submit </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    list:state.receiveList
  }
}


export default connect(mapStateToProps)(DisplayForm)
