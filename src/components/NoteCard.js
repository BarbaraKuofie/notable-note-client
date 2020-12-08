import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { removeNote, makeHelpful, makeUnhelpful, updateNote } from '../actions/notes'



class NoteCard extends Component {


   handleHelpful= (event) => {
       const id = event.target.id 
        event.preventDefault();
        fetch(`http://localhost:3000/api/v1/notes/${id}`, {
            method: 'PATCH', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.note)
        })
        .then (resp => resp.json())
        .then(note => {
            this.props.makeHelpful(note.id)
        })
        
    }
render  (){

    const { note } = this.props
   return (

   <div>
        <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">

          <p>{note.title}</p>
          <footer>- author <cite title="Source Title">{note.user}</cite></footer>
 
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
          type='icon' 
          name='thumbs down'
          size = 'small'
          onClick={makeUnhelpful}
          >  
          </Icon>
          {note.unhelpful}
        </div>
          
          <button 
            type="button" 
            onClick={() => removeNote(note.id)} 
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {note.votes}</div>
      </div>
    </div>
    </div>
   )
 }
}


const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps, { removeNote, makeHelpful, makeUnhelpful, updateNote })(NoteCard);