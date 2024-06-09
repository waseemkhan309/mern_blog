import { combineReducers } from "redux";
import authReducers from "./authReducers";

const reducers = combineReducers({
    user: authReducers
})

export default reducers;