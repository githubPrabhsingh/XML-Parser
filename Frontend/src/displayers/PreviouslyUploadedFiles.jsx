import React from "react";

function PreviouslyUploadedFiles({ handleFileSelection, xmlFile, fileList, loading }) {
  return (
    <div>
      <label>Select a Previously Uploaded File : </label>
      <select onChange={handleFileSelection} value={xmlFile ? xmlFile.fileName : ""} disabled={loading}>
        <option value="" disabled>Select a file</option>
        {loading ? <option value="" disabled>Loading...</option> : null}
        {fileList.map((file) => (
          <option key={file.id} value={file.fileName}>
            {file.fileName}
          </option>
        ))}
      </select>
      <div style={{ marginBottom: "10px" }}></div>
    </div>
  );
}

export default PreviouslyUploadedFiles;
