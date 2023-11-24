
package com.aniket.xmlparser.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.aniket.xmlparser.model.StateData;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class StateDataRepositoryJdbcImpl implements StateDataRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StateDataRepositoryJdbcImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<StateData> findAll() {
        String query = "SELECT stateName, conditions FROM you_table";
        return jdbcTemplate.query(query, this::mapRowToStateData);
    }

    @Override
    public List<StateData> findAllWithConditions() {
        String query = "SELECT stateName, conditions FROM you_table WHERE conditions IS NOT NULL";
        return jdbcTemplate.query(query, this::mapRowToStateData);
    }

    
    private StateData mapRowToStateData(ResultSet rs, int rowNum) throws SQLException {
        StateData stateData = new StateData();
        stateData.setStateName(rs.getString("stateName"));
        stateData.setConditions(rs.getString("conditions"));
        return stateData;
    }
}
