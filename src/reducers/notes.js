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
   
        index = state.map(note => {
            if (note.id === action.noteId){
                return {
                    ...note, 
                    helpful: note.helpful +=1
                }
            }
        })

        case "MAKE_UNHELPFUL":
        
            index = state.findIndex(note => note.id === action.noteId)
            note = state[index];
            filteredArray = state.filter(note => note.id !== action.noteId)
            note.unhelpful += 1
            return [...state,  ...filteredArray, note ]

    

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
