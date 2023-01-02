export const userReducer = (state=null,action) =>{
     switch(action.type)
     {
        case 'SET_USER':
              return action.payload;
        case 'DELETE_USER':
              return null;
       default:
              return state;
     }
};

export const counterReducer = (state=0,action) =>{
       switch(action.type)
       {
          case 'INCREMENT':
                return state+action.payload;
          case 'DECREMENT':
                return state-action.payload;
         default:
                return state;
       }
  };
  
