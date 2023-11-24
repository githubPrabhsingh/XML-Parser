import { useEffect } from "react";
import axios from "axios";
import { setFileList } from "../actions/actions";

const useFileListEffect = (dispatch) => {
  useEffect(() => {
    axios.get("http://localhost:8085/xml-parser/api/files")
      .then((response) => {
        dispatch(setFileList(response.data));
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, [dispatch]);
};

export default useFileListEffect;
