import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,setUser,deleteUser } from './actions';

function App() {

  const counter=useSelector((state) => (state.counterReducer))
  const user=useSelector((state) => (state.userReducer))
  const dispatch=useDispatch();
  
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}>
      
      <label>Enter</label>
      <button onClick={()=>dispatch(increment(10))}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement(30))}>DECREMENT</button>
      {counter}

      <label>Enter</label>
      <button onClick={()=>dispatch(setUser('Saravana'))}>SET USER</button>
      <button onClick={()=>dispatch(deleteUser())}>DELETE USER</button>
      {user===null ? 'No user' : user}
    </div>
  );
}

export default App;
