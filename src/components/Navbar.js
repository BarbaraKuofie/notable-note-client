import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import { logoutUser } from '../actions/authAction'
import { Menu } from 'semantic-ui-react'
import '../style/App.css'
import { Switch } from 'react-router-dom'


class Navbar extends Component {

    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({ activeItem: name })
    handleLogout = () => {
        localStorage.removeItem('my_app_token')
        this.props.logoutUser()
    }
    componentWillMount() {
        if (sessionStorage.getItem('jwt'))
          this.props.loginSuccess();
    }

    render() {
        const { activeItem } = this.state 
      
        return (
            <div className='ui inverted menu'>
             <Menu inverted secondary> 
                <NavLink to='/home' >
                   <Menu.Item
                       className='item'
                       name='home'
                       active={activeItem === 'home'}
                       onClick={this.handleItemClick}
                   />
               </NavLink>
                <NavLink to='/notes/new' >
                    <Menu.Item
                        className='item'
                        name='new note'
                        active={activeItem === 'new note'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>

                    <NavLink to='/' >
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleLogout}
                        >
                    </Menu.Item>
                </NavLink>
                <NavLink to='signup'>  
                <Menu.Item 
                   className='item'
                   name='signup'
                   active={activeItem === 'signup'}
                   onClick={this.handleItemClick}
               />
           </NavLink> 
              <NavLink to='login' >  
              <Menu.Item 
                 className='item'
                 name='login'
                 active={activeItem === 'login'}
                 onClick={this.handleItemClick}
             />
         </NavLink>
         </Menu>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logoutUser})(Navbar)
