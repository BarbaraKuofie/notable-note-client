const auth = (state=null, action) => {
    switch(action.type){
        case 'REGISTER_SUCCESS':
              return {
                     ...state,
                     inProgress: false,
                     errors: action.error ? action.payload.errors : null
                   };
        case 'LOGIN_USER':

        case 'LOGIN_SUCCESS':
               return action.user
           
        case 'CURRENT_USER':
                return action.user
                
         case 'LOGOUT_USER':
                return null 
         default: 
                return state 
    }
}

export default auth;