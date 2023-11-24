package com.aniket.xmlparser.service;

import java.util.ArrayList;
import java.util.List;

public class State {
    private String name;
    private List<Condition> conditions = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Condition> getConditions() {
        return conditions;
    }

    public void setConditions(List<Condition> conditions) {
        this.conditions = conditions;
    }

    public void addCondition(Condition condition) {
        conditions.add(condition);
    }

    public String getConditionsAsString() {
        StringBuilder conditionsAsString = new StringBuilder();
        for (Condition condition : conditions) {
            conditionsAsString.append("AssetClass: ").append(condition.getAssetClass()).append(", ");
            conditionsAsString.append("TransactionType: ").append(condition.getTransactionType()).append(", ");
            conditionsAsString.append("WireType: ").append(condition.getWireType()).append(", ");
            conditionsAsString.append("InitiatedBy: ").append(condition.getInitiatedBy()).append(", ");
            conditionsAsString.append("TransactionMode: ").append(condition.getTransactionMode()).append(", ");
            conditionsAsString.append("UserAction: ").append(condition.getUserAction()).append(", ");
            conditionsAsString.append("NextState: ").append(condition.getNextState()).append(", ");
            conditionsAsString.append("Validate: ").append(condition.isValidate()).append(", ");
            conditionsAsString.append("ValidationType: ").append(condition.getValidationType()).append(", ");
            conditionsAsString.append("ValidationResult: ").append(condition.isValidationResult()).append(", ");
            conditionsAsString.append("Description: ").append(condition.getDescription()).append("\n");
        }
        return conditionsAsString.toString();
    }
}

