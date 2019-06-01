import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer //syncs auth status on firebase with redux app on the state and put on this firebase obj on the state
});

export default rootReducer;
