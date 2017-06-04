import React from 'react'
import {connect} from 'react-redux'
// import {fetchPosts} from '../actions'

/*let DisplayForm = ({dispatch}) => (



  <button
    onClick={() => dispatch(fetchPosts('newzealand'))}
    >Fetch Posts</button>
)*/


class DisplayForm extends React.Component {
  constructor(props) {
    super(props)
this.state = {
      from:'',
      q:null,
      to:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({
        [e.target.name]:e.target.value
    })
  }

render () {
  console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
          <select name="from" onChange={this.handleChange}>
            <option value="NZD">NZD</option>
            <option value="USD">USD</option>           
            </select><br />
            <input type="number" name="q" onChange={this.handleChange} placeholder="Currency"/><br/>
            <select name="to" onChange={this.handleChange}>
            <option value="NZD">NZD</option>
            <option value="USD">USD</option>           
          </select><br/>
          <button> Submit </button>
      </form>
    )
  }
}


export default connect()(DisplayForm)
