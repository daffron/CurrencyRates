import React from 'react'
import {connect} from 'react-redux'


    const DisplayResult = (props) => {
        return (
            <div>
                <h4>{props.result}</h4><h5> </h5>
            </div>
        )
    }

function mapStateToProps (state) {
    return {
        result: state.receiveCurrency
    }
}

    export default connect(mapStateToProps)(DisplayResult)