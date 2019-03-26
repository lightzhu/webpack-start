import { combineReducers } from "redux";
var list = [
  {
    index: 0,
    text: "Racing car sprays burning fuel into crowd.",
    complete: "true"
  },
  { index: 1, text: "Japanese princess to wed commoner.", complete: "true" },
  {
    index: 2,
    text: "Australian walks 100km after outback crash.",
    complete: "fasle"
  },
  {
    index: 3,
    text: "Racing car sprays burning fuel into crowd.",
    complete: "fasle"
  },
  {
    index: 4,
    text: "Man charged over missing wedding girl.",
    complete: "fasle"
  },
  { index: 5, text: "Los Angeles battles huge wildfires.", complete: "true" },
  {
    index: 6,
    text: "Racing car sprays burning fuel into crowd.",
    complete: "fasle"
  }
];
const todos = (state = { list, msg: "" }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        list:[
          { index: state.list.length, text: action.text, complete: "false" },
          ...state.list
        ],
        msg:'abc'
      };
    case "DELETE_TODO":
      return {
        list:state.list.filter((item) => item.index != action.index),
        msg:'1234'
      }
    default:
      return state;
  }
};
export default combineReducers({
  todos
});
