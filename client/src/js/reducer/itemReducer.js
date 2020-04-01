import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/actionType";
const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(el => el._id !== action.payload)
      };
    case ITEMS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
