package com.aniket.xmlparser.model;

public class FileDetails {
    private Long id;
    private String fileName;
    private String timestamp;
    private byte[] fileData;

   

    public FileDetails() {
    }

    public FileDetails(Long id, String fileName, String timestamp, byte[] fileData) {
        this.id = id;
        this.fileName = fileName;
        this.timestamp = timestamp;
        this.fileData = fileData;
    }

   

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }

	
}

