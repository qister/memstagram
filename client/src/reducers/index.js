import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
  authorization: authReducer,
  reducer: reducer,
});
