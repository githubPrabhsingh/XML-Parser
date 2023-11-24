import React, { useState, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import XmlFileUpload from "../displayers/XmlFileUpload";
import StateSelection from "../displayers/StateSelection";
import ConditionDisplay from "../displayers/ConditionDisplay";
import PreviouslyUploadedFiles from "../displayers/PreviouslyUploadedFiles";
import XmlFileSelectors from "../selectors/XmlFileSelectors";
import useFileListEffect from "../assets/useFileListEffect";
import handleFileSelection from "../assets/handleFileSelection";
import handleFilechoose from "../assets/handleFilechoose";
import handleStateChange from "../assets/handleStateChange";
import parseData from "../assets/parseData";
import uploadFile from "../assets/uploadFile";
import conditionstateutil from "../assets/conditionstateutil";
import "./Styles.css";

// const XmlFileUpload = lazy(() => import("../displayers/XmlFileUpload"));
// const StateSelection = lazy(() => import("../displayers/StateSelection"));
// const ConditionDisplay = lazy(() => import("../displayers/ConditionDisplay"));
// const PreviouslyUploadedFiles = lazy(() => import("../displayers/PreviouslyUploadedFiles"));

function XmlFileReader() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {xmlFile, selectedState, states, conditions, uploadStatus, fileList, selectStateEnabled, cachedFileData} = XmlFileSelectors();

  useFileListEffect(dispatch);

  const handleFilechooseCallback = (event) => {
    handleFilechoose(event, dispatch);
  };

  const uploadFileCallback = () => {
    uploadFile(xmlFile, dispatch, setLoading);
  };

  const handleFileSelectionCallback = (event) => {
    handleFileSelection(event, fileList, dispatch);
  };

  const parseDataCallback = () => {
    parseData(xmlFile, setLoading, cachedFileData, dispatch);
  };

  const handleStateChangeCallback = (event) => {
    handleStateChange(event, dispatch);
  };
  
  conditionstateutil(dispatch, selectedState, states);

  return (
    <div>
      <input type="file" id="fileInput" accept=".xml" onChange={handleFilechooseCallback} />
      <p>{uploadStatus}</p>

      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <StateSelection
          selectedState={selectedState}
          handleStateChange={handleStateChangeCallback}
          selectStateEnabled={selectStateEnabled}
          loading={loading}
          states={states}
        />
        <ConditionDisplay selectedState={selectedState} conditions={conditions} />
        <PreviouslyUploadedFiles
          handleFileSelection={handleFileSelectionCallback}
          xmlFile={xmlFile}
          fileList={fileList}
          loading={loading}
        />
        <XmlFileUpload
          handleFileUpload={handleFilechooseCallback}
          xmlFile={xmlFile}
          loading={loading}
          uploadFile={uploadFileCallback}
          parseData={parseDataCallback}
        />
      {/* </Suspense> */}
    </div>
  );
}

export default XmlFileReader;
