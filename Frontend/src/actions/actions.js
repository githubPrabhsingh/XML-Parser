
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
} from "./actionTypes";

export const setXmlFile = (file) => ({
  type: SET_XML_FILE,
  payload: file,
});

export const setSelectedState = (newState) => ({
  type: SET_SELECTED_STATE,
  payload: newState,
});

export const setStates = (states) => ({
  type: SET_STATES,
  payload: states,
});

export const setConditions = (conditions) => ({
  type: SET_CONDITIONS,
  payload: conditions,
});

export const setUploadStatus = (status) => ({
  type: SET_UPLOAD_STATUS,
  payload: status,
});

export const setFileList = (fileList) => ({
  type: SET_FILE_LIST,
  payload: fileList,
});

export const setSelectStateEnabled = (enabled) => ({
  type: SET_SELECT_STATE_ENABLED,
  payload: enabled,
});

export const setCachedFileList = (fileList) => ({
  type: SET_CACHED_FILE_LIST,
  payload: fileList,
});

export const cacheParsedFile = (fileId, fileData) => ({
  type: CACHE_PARSED_FILE,
  payload: {
    fileId,
    fileData,
  },
});


