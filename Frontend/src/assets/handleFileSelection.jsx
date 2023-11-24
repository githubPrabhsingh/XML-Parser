import { setXmlFile, setSelectedState } from "../actions/actions";

const handleFileSelection = (event, fileList, dispatch) => {
  const selectedFileName = event.target.value;
  const fileData = fileList.find((file) => file.fileName === selectedFileName);

  if (fileData) {
    dispatch(setXmlFile({ ...fileData, id: fileData.id }));
    // console.log({ ...fileData, id: fileData.id });
  } else {
    dispatch(setXmlFile(null));
    dispatch(setSelectedState(null));
  }
};

export default handleFileSelection;
