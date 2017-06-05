import React from 'react'
import {connect} from 'react-redux'
import {fetchCurrency} from '../actions'

/*let DisplayForm = ({dispatch}) => (



  <button
    onClick={() => dispatch(fetchPosts('newzealand'))}
    >Fetch Posts</button>
)*/


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
  }

  handleChange(e) {
    this.setState({
        [e.target.name]:e.target.value
    })
  }

render () {
  console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
          <select name="from" onChange={this.handleChange}>
            {this.props.list.map((item) => {
              return(
                <option value={item}>{item}</option>
              )
            })}          
            </select><br />
            <input type="number" name="q" onChange={this.handleChange} placeholder="Currency"/><br/>
            <select name="to" onChange={this.handleChange}>
            {this.props.list.map((item) => {
              return(
                <option value={item}>{item}</option>
              )
            })}                   
          </select><br/>
          <button> Submit </button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    list:state.receiveList
  }
}


export default connect(mapStateToProps)(DisplayForm)
