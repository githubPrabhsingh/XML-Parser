
package com.aniket.xmlparser.controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.aniket.xmlparser.model.FileDetails;
import com.aniket.xmlparser.model.StateData;

import com.aniket.xmlparser.service.FileService;
import com.aniket.xmlparser.service.XmlParserService;


import java.util.List;

@RestController
@RequestMapping("/api")
public class StateDataController {

    private final XmlParserService xmlParserService;
    private final FileService fileService;

    @Autowired
    public StateDataController(XmlParserService xmlParserService, FileService fileService) {
        this.xmlParserService = xmlParserService;
        this.fileService = fileService;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/files")
    public ResponseEntity<List<FileDetails>> getAllFiles() {
        try {
            List<FileDetails> files = fileService.getAllFiles();
            return ResponseEntity.ok(files);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/upload")
    public ResponseEntity<UploadResponse> uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(new UploadResponse("Please select a file to upload."));
        }

        try {
            Long fileId = fileService.saveFileDetails(file);
            return ResponseEntity.ok(new UploadResponse("File uploaded successfully. File ID: " + fileId));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new UploadResponse("File processing failed: " + e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/parseandstore")
    public ResponseEntity<ParseAndStoreResponse> parseAndStoreData(@RequestParam("fileId") Long fileId) {
        try {
            FileDetails fileDetails = fileService.getFileDetailsById(fileId);
            xmlParserService.parseAndStoreData(fileId, fileDetails); // Pass fileId to associate parsed data
            List<StateData> stateDataList = xmlParserService.getStateDataList(fileId);
            return ResponseEntity.ok(new ParseAndStoreResponse("Data parsed and stored successfully.", stateDataList));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ParseAndStoreResponse("Data processing failed: " + e.getMessage(), null));
        }
    }

    static class ParseAndStoreResponse {
        private String message;
        private List<StateData> stateDataList;

        public ParseAndStoreResponse(String message, List<StateData> stateDataList) {
            this.message = message;
            this.stateDataList = stateDataList;
        }

        public String getMessage() {
            return message;
        }

        public List<StateData> getStateDataList() {
            return stateDataList;
        }
    }

    static class UploadResponse {
        private String message;

        public UploadResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
}
