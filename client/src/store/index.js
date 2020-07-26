import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";
import logger from "redux-logger";

export const configureStore = () =>
  createStore(rootReducer, applyMiddleware(logger, thunk))
