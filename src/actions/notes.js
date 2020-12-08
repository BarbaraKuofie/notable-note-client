import notes from "../reducers/notes";

export const addNote = note => {
    return{
        type: 'ADD_NOTE',
        note: note
        // Object.assign({}, note, {helpul: 0})
    }
}
export const viewNote = noteId => {
    return {
        type: 'VIEW_NOTE', 
        noteId
    }
}

export const viewNotes = notes => {
    return {
        type: 'VIEW_NOTES', 
        notes
    }
}

export const removeNote = noteId => {
    return {
        type: 'REMOVE_NOTE', 
        noteId
    }
}

export const updateNote = noteId => {
    return {
        type: 'UPDATE_NOTE', 
        noteId
    }
}

export const makeHelpful = noteId => {
    return {
        type: 'MAKE_HELPFUL', 
        noteId
    }
}

export const makeUnhelpful = noteId => {
    return {
        type: 'MAKE_UNHELPFUL',
        noteId 
    }
}
