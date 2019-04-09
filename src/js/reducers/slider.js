export default function counter(state = 10, action) {
  switch (action.type) {
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
    case "NORMAL":
      return action.val;
    default:
      return state;
  }
};
