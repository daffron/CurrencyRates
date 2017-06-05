import React from 'react'
import {connect} from 'react-redux'


 class News extends React.Component{
     constructor(props){
         super(props)
     }

     render(){
         console.log(this.props)
      return(
          <div className="text-center news">
              <h1>Related News</h1>
              <hr/>
            <iframe src = {`https://www.bloomberg.com/search?query=${this.props.search}`} sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"/>
        </div>
      )
   }
 }

 function mapStateToProps(state){
     console.log(state)
     return {
         news: state.newsList,
         search: state.currencySuffix
         
     }
 }

 export default connect(mapStateToProps)(News)