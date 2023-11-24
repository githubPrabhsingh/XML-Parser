import React from "react";

function StateSelection({ selectedState, handleStateChange, selectStateEnabled, loading, states }) {
  return (
    <div>
      <label>Select a State : </label>
      <select value={selectedState || ""} onChange={handleStateChange} disabled={!selectStateEnabled || loading}>
        <option value="" disabled>Select a state</option>
        {loading ? <option value="" disabled>Loading...</option> : null}
        {states.map((state) => (
          <option key={state.stateName} value={state.stateName}>
            {state.stateName}
          </option>
        ))}
      </select>
      <div style={{ marginBottom: "10px" }}></div>
    </div>
  );
}

export default StateSelection;
