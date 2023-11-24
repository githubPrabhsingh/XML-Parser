package com.aniket.xmlparser.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.aniket.xmlparser.model.FileDetails;
import com.aniket.xmlparser.model.StateData;

import javax.xml.namespace.QName;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamReader;

import java.io.ByteArrayInputStream;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class XmlParserService {

    private final Map<Long, List<StateData>> parsedDataMap = new HashMap<>();

    @Autowired
    public XmlParserService() {
    }

    public void parseAndStoreData(Long fileId, FileDetails fileDetails) throws Exception {
        try (InputStream inputStream = new ByteArrayInputStream(fileDetails.getFileData())) {
            XMLInputFactory inputFactory = XMLInputFactory.newInstance();
            XMLStreamReader reader = inputFactory.createXMLStreamReader(inputStream);
            State state = null;
            Condition condition = null;
            List<StateData> stateDataList = new ArrayList<>();

            while (reader.hasNext()) {
                int event = reader.next();

                switch (event) {
                    case XMLStreamConstants.START_ELEMENT:
                        QName elementName = reader.getName();

                        if ("State".equals(elementName.getLocalPart())) {
                            state = new State();
                            state.setName(reader.getAttributeValue(null, "name"));
                        } else if ("Condition".equals(elementName.getLocalPart())) {
                            condition = new Condition();
                            condition.setAssetClass(reader.getAttributeValue(null, "assetClass"));
                            condition.setTransactionType(reader.getAttributeValue(null, "transactionType"));
                            condition.setWireType(reader.getAttributeValue(null, "wireType"));
                            condition.setInitiatedBy(reader.getAttributeValue(null, "initiatedBy"));
                            condition.setTransactionMode(reader.getAttributeValue(null, "transactionMode"));
                            condition.setUserAction(reader.getAttributeValue(null, "userAction"));
                            condition.setNextState(reader.getAttributeValue(null, "nextState"));
                            condition.setValidate(Boolean.parseBoolean(reader.getAttributeValue(null, "validate")));
                            condition.setValidationType(reader.getAttributeValue(null, "validationType"));
                            condition.setValidationResult(Boolean.parseBoolean(reader.getAttributeValue(null, "validationResult")));
                        }
                        break;

                    case XMLStreamConstants.END_ELEMENT:
                        QName endElementName = reader.getName();
                        if ("State".equals(endElementName.getLocalPart())) {
                            if (state != null) {
                                stateDataList.add(new StateData(state.getName(), state.getConditionsAsString()));
                            }
                            state = null;
                        } else if ("Condition".equals(endElementName.getLocalPart()) && state != null) {
                            state.addCondition(condition);
                            condition = null;
                        }
                        break;
                }
            }
            parsedDataMap.put(fileId, stateDataList);
        }
    }

    public List<StateData> getStateDataList(Long fileId) {
        return parsedDataMap.getOrDefault(fileId, Collections.emptyList());
    }
}
