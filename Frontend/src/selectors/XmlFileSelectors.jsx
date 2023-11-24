import { useSelector } from "react-redux";

function XmlFileSelectors() {
  const xmlFile = useSelector((state) => state.xmlFile);
  const selectedState = useSelector((state) => state.selectedState);
  const states = useSelector((state) => state.states);
  const conditions = useSelector((state) => state.conditions);
  const uploadStatus = useSelector((state) => state.uploadStatus);
  const fileList = useSelector((state) => state.fileList);
  const selectStateEnabled = useSelector((state) => state.selectStateEnabled);
  const cachedFileList = useSelector((state) => state.cachedFileList);
  const cachedFileData = useSelector((state) => state.cachedFileData);

  return {
    xmlFile,
    selectedState,
    states,
    conditions,
    uploadStatus,
    fileList,
    selectStateEnabled,
    cachedFileList,
    cachedFileData,
  };
}

export default XmlFileSelectors;
