import React, { Component } from 'react'
import uuid from 'uuid';
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'
import '../style/App.css'

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
    // handleChange = (e, { value }) => this.setState({ value })
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
                this.props.history.push('/home')
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
        const {title, owner, content, icon, value } = this.state
    

        return (
            <div >
                <h3> Add Note </h3>
                {this.state.error ? <h3 style={{color: 'red'}}>{this.state.error}</h3> : null}
                <Form onSubmit={this.handleSubmit} className='form'>
                    <div>
                    <Form.Input fluid label='Title' 
                    placeholder='Awesome Title' 
                    name='title'
                    value={title} 
                    onChange={this.handleChange}/>
                    <Form.Group inline>

                 <label>Language</label>
                            <Form.Radio
                                label='Javascript'
                                value={icon }
                                name='Javascript'
                                // checked={value === 'Javascript'}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label='Ruby'
                                value={icon}
                                name='Ruby'
                                // checked={value === 'Ruby'}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label='React'
                                value= {icon}
                                name='React'
                                // checked={value === 'React'}
                                onChange={this.handleChange}
                            />
                              <Form.Radio
                                label='Python'
                                name='Python'
                                value={icon}
                                // checked={value === 'Python'}
                                onChange={this.handleChange}
                            />
                               <Form.Radio
                                label='C##'
                                name='C##'
                                value={icon}
                                // checked={value === 'C##'}
                                onChange={this.handleChange}
                            />
                            </Form.Group>
                                            <Form.TextArea label='Content' placeholder='No limit on note content...' type='text' name={'content'}  value={this.state.content} onChange={this.handleChange}/>
                    <Form.Input fluid label='Note Owner' 
                    placeholder='Owner' type='text'
                     name={'owner'}  
                     value={owner} 
                     onChange={this.handleChange} />
                     
                     {/* other options  */}
                    {/* <input placeholder="title" type='text' name={'title'}  value={this.state.title} onChange={this.handleChange}/>  */}
                    </div>
                    {/* <div className='pass-wrapper'>
                         <br />
                        <label>Note Owner:</label> 
                          <br />
                        <input placeholder='owner' type='text' name={'owner'}  value={this.state.owner} onChange={this.handleChange}/> 
                        <br />
                    </div> */}
                    {/* <div>
                         <label>Note Content:</label>
                           <br />
                         <input placeholder='content' type='text' name={'content'}  value={this.state.content} onChange={this.handleChange}/> 
                         <br />
                    </div> */}
                    {/* <div>
                    <input type='radio' name={'Javascript'}  value={this.state.icon} onChange={this.handleChange}/> 
                        <label>Javascript</label>
                    <input type='radio' name={'Ruby'}  value={this.state.icon} onChange={this.handleChange}/> 
                        <label>Ruby</label>
                    <input type='radio' name={'React'}  value={this.state.icon} onChange={this.handleChange}/> 
                        <label>React</label>
                    <input type='radio' name={'C##'}  value={this.state.icon} onChange={this.handleChange}/> 
                        <label>C##</label>
                    </div> */}
                    <div>
                        <br />
                    <Form.Button type='submit'>Submit</Form.Button>
                    </div>
                
                </Form>
            </div>
  
        )
    }
}
const mapStateToProps = (state) => {
    return {auth: state.auth}
}

export default connect( mapStateToProps, {addNote}) (NoteForm);