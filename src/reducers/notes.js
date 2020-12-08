import { addNote, removeNote, makeHelpful, makeUnhelpful, viewNote, viewNotes, updateNote} from "../actions/notes";

export default (state = [], action ) => {
    let index; 
    let note; 
    let filteredArray;

    switch(action.type){
        case "ADD_NOTE":
        return [...state, action.note];
    
        case 'REMOVE_NOTE':
            return state.filter(note => note.id !== action.noteId);
        
        case "MAKE_HELPFUL":
    
            index = state.findIndex(note => note.id === action.note.id)
                filteredArray = state.filter(note => note.id !== action.note.id)
            return [...filteredArray, action.note ]

        case "MAKE_UNHELPFUL":
        
            index = state.findIndex(note => note.id === action.noteId)
            filteredArray = state.filter(note => note.id !== action.noteId)
            return [...filteredArray, action.note ]

    

        // case 'VIEW_NOTE': 
      

        case 'VIEW_NOTES':
            console.log(action.notes)
            return [...state, ...action.notes]
            
        case 'UPDATE_NOTE':
            index = state.findIndex(note => note.id === action.noteId)
            note = state[index]
            return [state]
    default:
        return state 
    }
}
