import axios from "axios";
export const allTodo = () => ({
  type: "ALL_TODO"
});
export const addTodo = text => ({
  type: "ADD_TODO",
  text
});
export const completeTodo = index => ({
  type: "COMPELETE_TODO",
  index
});
export const deleteTodo = index => ({
  type: "DELETE_TODO",
  index
});
export const didTodo = () => ({
  type: "DID_TODO"
});
export const planTodo = () => ({
  type: "PLAN_TODO"
});
const citys = (data) => ({
  type: "GETCITYLIST",
  data
});

export const getCityData = () => ((dispatch, getState) => {
  //先去请求数据
  axios("/api/simpleWeather/cityList",{params: {key: "6b53946c4d8af6822829a63da7a36675" }})
    .then(function(response) {
      if (response.status === 200) {
        if (response.data) {
          console.log(response);
          dispatch(citys(response.data))
        } else {
          message.error("返回数据不存在");
        }
      }
    })
    .catch(function(error) {
      console.log(error);
    });
});
