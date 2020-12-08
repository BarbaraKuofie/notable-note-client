import React, { Component } from 'react';
import NoteCard from '../components/NoteCard'
import { connect } from 'react-redux'
import { viewNote, updateNote, viewNotes} from '../actions/notes';

class Notes extends Component {
  

    
    componentDidMount(){
        const token = localStorage.getItem('my_app_token')
        fetch('http://localhost:3000/api/v1/notes')
          .then(resp => resp.json())
          .then(notes => {
            this.props.viewNotes(notes)
          }) 
        }

      

    render () {
      
        const {notes, viewNote, updateNote } = this.props;

        return (
            <div>
                <div className="row justify-content-center">
        
                </div>
                <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                {notes.map(note => <NoteCard  key= {note.id}
                                // viewNote = {viewNote}
                                // updateNote = {updateNote}
                                note = { note }
                                />)}
                            
                             </div>
                     </div>
                 </div>
            </div>
        )
    }
}

const mapSateToProps=state => {
    return ({
        notes: state.notes 
    })
}

export default connect(mapSateToProps, {viewNote, updateNote, viewNotes})(Notes);