import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  postReducer,
});

export default rootReducer;
