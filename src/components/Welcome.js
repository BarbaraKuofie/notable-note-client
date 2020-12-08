import React, { Component } from 'react';
import '../style/App.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Welcome extends Component {
    render () {
        return(
            <div >
                        <h2 className='pretty'>Welcome to Notable</h2>
                        <br />
                        <br />
                        <p className= 'quote'>“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” - Albert Einstein</p>
            </div>
        )
    }
}

export default Welcome;