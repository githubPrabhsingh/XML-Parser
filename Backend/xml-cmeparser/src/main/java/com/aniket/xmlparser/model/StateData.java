package com.aniket.xmlparser.model;

public class StateData {
    private String stateName;
    private String conditions;

    public StateData() {
    }

    public StateData(String stateName, String conditions) {
        this.stateName = stateName;
        this.conditions = conditions;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public String getConditions() {
        return conditions;
    }

    public void setConditions(String conditions) {
        this.conditions = conditions;
    }
}


