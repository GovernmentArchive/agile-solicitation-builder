import { EXAMPLE_ACTION } from '../actions';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
