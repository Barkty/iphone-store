import { combineReducers } from "redux";
import appReducer from "./index";

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
