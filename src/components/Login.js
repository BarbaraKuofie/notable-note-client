import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentUser, loginSuccess } from '../actions/authAction'

class Login extends Component {
        state = {
            username: '',
            password: '',
            error: null,
        }
    
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
          [name]: value
        })
    }

    handleLogin = event => {
        event.preventDefault()
        console.log("hello there")

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3000/api/v1/auth', reqObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                this.setState({
                    error: user.error
                })
            }else {
                this.props.loginSuccess(user)
                this.props.history.push('/home')
                localStorage.setItem('app_token', user.token )
                this.setState({
                    username: '',
                    password: '',
                    error: null
                })
            }
        })
    }
    render () {
        return (
            <div >
                <h3> Login </h3>
                {this.state.error ? <h3 style={{color: 'red'}}>{this.state.error}</h3> : null}
                <form onSubmit={this.handleLogin}>
                    <div>
                    <input placeholder="username" type='text' name={'username'}  value={this.state.username} onChange={this.handleChange}/> 
                    </div>
                    <div className='pass-wrapper'>
                         <input placeholder="password" type='password' name={'password'}  value={this.state.password} onChange={this.handleChange}/> 
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
    loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
