import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { Icon, Container, Header} from 'semantic-ui-react'
import { currentUser } from '../actions/authAction';
import { removeNote, makeHelpful, makeUnhelpful, updateNote } from '../actions/notes'



class NoteCard extends Component {


   handleHelpful= (event) => {
       const id = this.props.note.id 
       const increment = {...this.props.note, helpful: this.props.note.helpful +1}

        event.preventDefault();
        fetch(`http://localhost:3000/api/v1/notes/${id}`, {
            method: 'PATCH', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({note: increment})
        })
        .then (resp => resp.json())
        .then(note => {
            this.props.makeHelpful(note)
        })
        
    }

    handleUnhelpful= (event) => {
      const id = this.props.note.id 
      const increment = {...this.props.note, unhelpful: this.props.note.unhelpful +1}
       event.preventDefault();
       fetch(`http://localhost:3000/api/v1/notes/${id}`, {
           method: 'PATCH', 
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({note: increment})
       })
       .then (resp => resp.json())
       .then(note => {
           this.props.makeUnhelpful(note)
       })
       
   }

   handleDelete = event => {
     const targetId = this.props.note.id 

     fetch(`http://localhost:3000/api/v1/notes/${targetId}`,{ method: 'DELETE'})
     .then(resp => resp.json())
     .then(note => {
       this.props.removeNote(note.id)
     })
   }

render  (){
 
    const { note } = this.props
   return (

   <div>
     <Container fluid>
        <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
      <Header as='h2'>{note.title}</Header>
       
          <p> {note.content }</p>
          Taken By: {note.owner}
 
      </div>
      <div className="float-right"> 
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
        <div>
        <Icon
            id = {note.id}
          type='icon' 
          name='thumbs up'
          size = 'small'
          onClick={this.handleHelpful}
          >  
          </Icon>
          {note.helpful}
        </div>
        <div>
        <Icon
          id = {note.id}
          type='icon' 
          name='thumbs down'
          size = 'small'
          onClick={this.handleUnhelpful}
          >  
          </Icon>
          {note.unhelpful}
        </div>
         <Icon
         name='trash'
         onClick={this.handleDelete} 
         ></Icon>
           
          
        </div>
      </div>
    </div>
    </Container>
    </div>
   )
 }
}

{/* <button 
type="button" 

// className="btn btn-danger"
>

</button> */}


const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps, { removeNote, makeHelpful, makeUnhelpful, updateNote })(NoteCard);