import { combineReducers } from "redux";
import orderReducers from "./orderReducers";

const rootReducer = combineReducers({
    orders: orderReducers
});

export default rootReducer;