export const setUser = (name) =>{
     return{
        type:'SET_USER',
        payload:name,
     }
}

export const deleteUser = () =>{
    return{
       type:'DELETE_USER',
       payload:null,
    }
}
export const increment = (number) =>{
    return{
       type:'INCREMENT',
       payload:number,
    }
}

export const decrement = (number) =>{
   return{
      type:'DECREMENT',
      payload:number,
   }
}