import { combineReducers } from "redux";
var list = [
  {
    index: 0,
    text: "学习React，看书看到天黑。",
    complete: false
  },
  { index: 1, text: "吃饭、睡觉、打豆豆！", complete: true },
  {
    index: 2,
    text: "Australian walks 100km after outback crash.",
    complete: false
  },
  {
    index: 3,
    text: "Racing car sprays burning fuel into crowd.",
    complete: true
  }
];
const todos = (state = { list, msg: "" }, action) => {
  switch (action.type) {
    case "ALL_TODO":
      return {
        list:list,
        msg:'abc'
      };
    case "ADD_TODO":
      list.unshift({ index: state.list.length, text: action.text, complete: false});
      return {
        list:[
          { index: state.list.length, text: action.text, complete: false },
          ...state.list
        ],
        msg:'abc'
      };
    case "COMPELETE_TODO":
      return {
        list: list.map((item) => {
          if(item.index === action.index){
            item.complete=!item.complete;
          }
          return item;
        }),
        msg: '1234'
      }
    case "DELETE_TODO":
      return {
        list:list.filter((item) => item.index != action.index),
        msg:'1234'
      }
    case "DID_TODO":
      let newList = [];
      list.forEach((item)=>{
        if (item.complete) {
          newList.push(item);
        }
      })
      return {
        list: newList,
        msg: '1234'
      }
    case "PLAN_TODO":
      let newList2 = [];
      list.forEach((item) => {
        if (!item.complete) {
          newList2.push(item);
        }
      })
      return {
        list: newList2,
        msg: '1234'
      }
    default:
      return state;
  }
};
export default combineReducers({
  todos
});
