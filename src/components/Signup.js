import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerSuccess } from '../actions/authAction'
// import Agent from './Agent';




class Signup extends Component {
        state = {
            username: '',
            password: '',
            error: null
        }
    
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
          [name]: value
        })
    }

    handleNewUser = event => {
        event.preventDefault()
        console.log("hello there")

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3000/api/v1/users', reqObj)
        .then(resp => resp.json())
        .then(
           
           
            this.props.history.push('/login'),
            alert("you've successfully created an accout",
            alert("login with new account")
            )
        )
    }
    render () {
        return (
            <div >
                <h3> Register </h3>
                {this.state.error ? <h3 style={{color: 'red'}}>{this.state.error}</h3> : null}
                <form onSubmit={this.handleNewUser}>
                    <div>
                    <input placeholder="username" type='text' name={'username'}  value={this.state.username} onChange={this.handleChange}/> 
                    </div>
                    <div className='pass-wrapper'>
                         <input placeholder="password" type='password' name={'password'}  value={this.state.password} onChange={this.handleChange}/> 
                         {/* <i>{eye}</i>   */}
                    </div>
                    <div>
                     <button type="submit"> Submit </button>
                    </div>
                
                
                </form>
            </div>
  
        )
    }
}
const mapDispatchToProps = {
    registerSuccess: registerSuccess
}

export default connect(null, mapDispatchToProps)(Signup)
