import { useEffect } from "react";
import { setConditions } from "../actions/actions";

const conditionstateutil = (dispatch,selectedState,states) => {

  useEffect(() => {
    if (selectedState && states.length > 0) {
      const selectedStateData = states.find((state) => state.stateName === selectedState);

      if (selectedStateData) {
        const conditionsArray = selectedStateData.conditions.split("\n");
        dispatch(setConditions(conditionsArray));
      } else {
        dispatch(setConditions([]));
      }
    } else {
      dispatch(setConditions([]));
    }
  }, [selectedState, states]);
}

export default conditionstateutil;