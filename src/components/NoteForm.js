import React, { Component } from 'react'
import uuid from 'uuid';
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

class NoteForm extends Component {
    state = {
        owner: '',
        title: '',
        content: ' ',
        icon: ' ',
        helpful: 0,
        unhelpful: 0,
        error: null
    }

    handleChange = event => {
        // Handle Updating Component State
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

      handleSubmit = event => {
        event.preventDefault()
        console.log("hello there")

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({...this.state, user_id: this.props.auth.id})
        }
        fetch('http://localhost:3000/api/v1/notes', reqObj)
        .then(resp => resp.json())
        .then(note => {
            console.log(note)
            if (note.error){
                this.setState({
                    error: note.error
                })
            }else {
                this.props.addNote(note)
                this.props.history.push('/')
                this.setState({
                    owner: '',
                    title: '',
                    content: ' ',
                    icon: ' ', 
                    error: null
                })
            }
        })
    }

    render () {
        console.log(this.props)
        return (
            <div className='App'>
                <h3> Add Note </h3>
                {this.state.error ? <h3 style={{color: 'red'}}>{this.state.error}</h3> : null}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <br />
                    <input placeholder="title" type='text' name={'title'}  value={this.state.title} onChange={this.handleChange}/> 
                    </div>
                    <div className='pass-wrapper'>
                         <br />
                        <label>Note Owner:</label> 
                          <br />
                        <input placeholder='owner' type='text' name={'owner'}  value={this.state.owner} onChange={this.handleChange}/> 
                        <br />
                    </div>
                    <div>
                         <label>Note Content:</label>
                           <br />
                         <input placeholder='content' type='text' name={'content'}  value={this.state.content} onChange={this.handleChange}/> 
                         <br />
                    </div>
                    <div>
                   
                    <input type='radio' name={'icon'}  value={this.state.icon} onChange={this.handleChange}/> 
                        <label>icon</label>
                    </div>
                    <div>
                     <button type="submit"> Submit </button>
                    </div>
                
                </form>
            </div>
  
        )
    }
}
const mapStateToProps = (state) => {
    return {auth: state.auth}
}

export default connect( mapStateToProps, {addNote}) (NoteForm);