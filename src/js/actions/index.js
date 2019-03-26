export const allTodo = () => ({
  type: 'ALL_TODO',
})
export const addTodo = text => ({
  type: 'ADD_TODO',
  text
})
export const completeTodo = index => ({
  type: 'COMPELETE_TODO',
  index
})
export const deleteTodo = index => ({
  type: 'DELETE_TODO',
  index
})
export const didTodo = () => ({
  type: 'DID_TODO',
})
export const planTodo = () => ({
  type: 'PLAN_TODO',
})
