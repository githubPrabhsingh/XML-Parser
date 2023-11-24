import React from "react";

function ConditionDisplay({ selectedState, conditions }) {
  return (
    <div>
      {selectedState && conditions.length > 0 && (
        <div>
          <h2>Conditions for {selectedState} :</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {conditions.slice(0, -1).map((condition, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",padding: "8px",borderRadius: "4px",marginBottom: "8px",marginLeft: "0",borderBlockColor:"green",borderInlineStartColor: "green",borderInlineEndColor: "green", borderBlockStartColor: "green",
                }}
              >
                {condition}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConditionDisplay;
