import React, { Component } from 'react';
import { connect } from 'react-redux'
import { currentUser } from '../actions/authAction'
import Notes from '../containers/Notes'
import '../style/App.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                <h1 className='pretty'> Notable Notes </h1>
                
                </div>
                <hr />
                <Notes />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, { currentUser})(Home);