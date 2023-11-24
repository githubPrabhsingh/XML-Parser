import { setStates, setSelectedState, setConditions, setUploadStatus, setSelectStateEnabled, setCachedFileList, cacheParsedFile } from "../actions/actions";
import axios from "axios";

const parseData = async (xmlFile, setLoading, cachedFileData, dispatch) => {
  if (xmlFile && xmlFile.id) {
    setLoading(true);

    try {
      if (cachedFileData[xmlFile.id]) {
        console.log("Using cached data:", cachedFileData[xmlFile.id]);
        dispatch(setStates(cachedFileData[xmlFile.id].stateDataList));
        dispatch(setSelectedState(""));
        dispatch(setConditions([]));
        dispatch(setUploadStatus("File data loaded from cache."));
        dispatch(setSelectStateEnabled(true));
      } else {
        const response = await axios.post("http://localhost:8085/xml-parser/api/parseandstore", null, {
          params: { fileId: xmlFile.id },
        });

        dispatch(cacheParsedFile(xmlFile.id, response.data));

        dispatch(setCachedFileList(Object.keys(cachedFileData)));

        console.log("Parsed data from the server:", response.data);

        dispatch(setStates(response.data.stateDataList));
        dispatch(setSelectedState(""));
        dispatch(setConditions([]));
        dispatch(setUploadStatus(response.data.message));
        dispatch(setSelectStateEnabled(true));
      }
    } catch (error) {
      console.error("Error parsing and storing data:", error);
      dispatch(setUploadStatus("Error parsing and storing data: " + error.message));
      dispatch(setSelectStateEnabled(false));
    } finally {
      setLoading(false);
    }
  } else {
    dispatch(setUploadStatus("Please select a file to parse and store data."));
  }
};

export default parseData;
