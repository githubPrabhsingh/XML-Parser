import { setSelectedState } from "../actions/actions";

const handleStateChange = (event, dispatch) => {
  const stateName = event.target.value;
  dispatch(setSelectedState(stateName));
};

export default handleStateChange;
