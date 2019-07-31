import {
  FETCHING_SMURFS,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADD_SMURFS
} from "../actions/index";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        err: "",
        fetchingSmurfs: true
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        err: "",
        smurfs: action.payload
      };

    case ADD_SMURFS:
      return {
        smurfs: action.payload
      };

    case FETCHING_FAILURE:
    default:
      return state;
  }
};
