import { combineReducers } from "redux";
import {
  SET_XML_FILE,
  SET_SELECTED_STATE,
  SET_STATES,
  SET_CONDITIONS,
  SET_UPLOAD_STATUS,
  SET_FILE_LIST,
  SET_SELECT_STATE_ENABLED,
  SET_CACHED_FILE_LIST,
  CACHE_PARSED_FILE,
} from "../actions/actionTypes";

const xmlFileReducer = (state = null, action) => {
  switch (action.type) {
    case SET_XML_FILE:
      return action.payload;
    default:
      return state;
  }
};

const selectedStateReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_STATE:
      return action.payload;
    default:
      return state;
  }
};

const statesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STATES:
      return action.payload;
    default:
      return state;
  }
};

const conditionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CONDITIONS:
      return action.payload;
    default:
      return state;
  }
};

const uploadStatusReducer = (state = "", action) => {
  switch (action.type) {
    case SET_UPLOAD_STATUS:
      return action.payload;
    default:
      return state;
  }
};

const fileListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FILE_LIST:
      return action.payload;
    default:
      return state;
  }
};

const selectStateEnabledReducer = (state = false, action) => {
  switch (action.type) {
    case SET_SELECT_STATE_ENABLED:
      return action.payload;
    default:
      return state;
  }
};

const cachedFileListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CACHED_FILE_LIST:
      return action.payload;
    default:
      return state;
  }
};

const cachedFileDataReducer = (state = {}, action) => {
  switch (action.type) {
    case CACHE_PARSED_FILE:
      return {
        ...state,
        [action.payload.fileId]: action.payload.fileData,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  xmlFile: xmlFileReducer,
  selectedState: selectedStateReducer,
  states: statesReducer,
  conditions: conditionsReducer,
  uploadStatus: uploadStatusReducer,
  fileList: fileListReducer,
  selectStateEnabled: selectStateEnabledReducer,
  cachedFileList: cachedFileListReducer,
  cachedFileData: cachedFileDataReducer, 
});

export default rootReducer;
