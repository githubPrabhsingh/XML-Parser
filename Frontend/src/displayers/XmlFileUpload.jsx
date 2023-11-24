import React from "react";

function XmlFileUpload({ xmlFile, loading, uploadFile, parseData }) {
  return (
    <div>
      <div className="upload-container">
        <button onClick={uploadFile} disabled={!xmlFile || loading}>
          {loading ? "Uploading..." : "Upload File"}
        </button>
        <span style={{ marginRight: "10px" }}></span>
        <button onClick={parseData} disabled={!xmlFile || loading}>
          {loading ? "Processing..." : "Parse Data"}
        </button>
      </div>
    </div>
  );
}

export default XmlFileUpload;
