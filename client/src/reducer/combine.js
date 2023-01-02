import { combineReducers } from "redux";
import {counterReducer,userReducer} from '../reducer/index'

const CombineReducers= combineReducers({
 counterReducer,userReducer
})

export default CombineReducers;