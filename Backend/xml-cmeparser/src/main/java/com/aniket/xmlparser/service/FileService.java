package com.aniket.xmlparser.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aniket.xmlparser.model.FileDetails;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FileService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public FileService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        createFileTableIfNotExists();
    }

    public Long saveFileDetails(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String timestamp = java.time.LocalDateTime.now().toString();
        byte[] fileData = file.getBytes(); // Updated attribute name to match SQL column name

        SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(jdbcTemplate)
                .withTableName("file_table")
                .usingGeneratedKeyColumns("id");

        Map<String, Object> parameters = new HashMap<>();
        parameters.put("file_name", fileName);
        parameters.put("timestamp", timestamp);
        parameters.put("file_data", fileData); // Updated attribute name to match SQL column name

        Number fileId = jdbcInsert.executeAndReturnKey(new MapSqlParameterSource(parameters));

        return fileId.longValue();
    }

    public List<FileDetails> getAllFiles() {
        String query = "SELECT * FROM file_table";
        RowMapper<FileDetails> rowMapper = BeanPropertyRowMapper.newInstance(FileDetails.class);
        return jdbcTemplate.query(query, rowMapper);
    }

    public FileDetails getFileDetailsById(Long fileId) {
        String query = "SELECT * FROM file_table WHERE id = ?";
        RowMapper<FileDetails> rowMapper = BeanPropertyRowMapper.newInstance(FileDetails.class);
        return jdbcTemplate.queryForObject(query, rowMapper, fileId);
    }

    private void createFileTableIfNotExists() {
        String createTableSQL = "CREATE TABLE IF NOT EXISTS file_table (" +
                "id INT AUTO_INCREMENT PRIMARY KEY," +
                "file_name VARCHAR(255) NOT NULL," +
                "timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP," +
                "file_data LONGBLOB" +
                ")";
        jdbcTemplate.execute(createTableSQL);
    }
}
