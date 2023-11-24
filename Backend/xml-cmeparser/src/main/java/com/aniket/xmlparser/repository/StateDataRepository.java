

package com.aniket.xmlparser.repository;

import java.util.List;

import com.aniket.xmlparser.model.StateData;

public interface StateDataRepository {
    List<StateData> findAll();
    List<StateData> findAllWithConditions();
    
}
