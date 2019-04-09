import { combineReducers } from "redux";
//todos,reducer
import todos from './todos';
//滑动条reducer
import slider from './slider';

let reducerList = {todos,slider}
//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，
//合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore
const reducers = combineReducers({ ...reducerList })

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer;