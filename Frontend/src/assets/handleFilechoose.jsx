// fileUploadUtils.js
import {
  setUploadStatus,
  setSelectStateEnabled,
  setXmlFile,
  setSelectedState,
  setConditions,
} from "../actions/actions";

const handleFilechoose = (event, dispatch) => {
  const file = event.target.files[0];
  if (file) {
    if (file.type === "application/xml" || file.name.toLowerCase().endsWith(".xml")) {
      dispatch(setUploadStatus(" File Choosen Successfully "));
      dispatch(setSelectStateEnabled(false));
      dispatch(setXmlFile(file));
      dispatch(setSelectedState(null));
      dispatch(setConditions([]));
    } else {
      dispatch(setUploadStatus("Invalid file type. Please select an XML file."));
      dispatch(setSelectStateEnabled(false));
      dispatch(setSelectedState(null));
      dispatch(setConditions([]));
      event.target.value = "";
    }
  }
};

export default handleFilechoose;
