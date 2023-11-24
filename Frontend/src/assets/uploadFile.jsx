import { setUploadStatus, setSelectStateEnabled, setSelectedState, setFileList } from "../actions/actions";
import axios from "axios";

const uploadFile = async (xmlFile, dispatch, setLoading) => {
  if (xmlFile) {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", xmlFile);

    try {
      const response = await axios.post("http://localhost:8085/xml-parser/api/upload", formData);
      dispatch(setUploadStatus(response.data.message));

      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.value = "";
      }

      dispatch(setSelectedState(""));

      const filesResponse = await axios.get("http://localhost:8085/xml-parser/api/files");
      dispatch(setFileList(filesResponse.data));

      // dispatch(setSelectStateEnabled(true));
    } catch (error) {
      console.error("Error uploading XML file:", error);
      dispatch(setUploadStatus("Error uploading XML file: " + error.message));
      dispatch(setSelectStateEnabled(false));
    } finally {
      setLoading(false);
    }
  } else {
    dispatch(setUploadStatus("Please select a file to upload."));
  }
};

export default uploadFile;
