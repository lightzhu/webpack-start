var list = [
  {
    index: 0,
    text: '学习React，看书看到天黑。',
    complete: false
  },
  { index: 1, text: '吃饭、睡觉、打豆豆！', complete: true },
  {
    index: 2,
    text: 'Australian walks 100km after outback crash.',
    complete: false
  },
  {
    index: 3,
    text: 'Racing car sprays burning fuel into crowd.',
    complete: true
  }
]
const todos = (state = { list, msg: '' }, action) => {
  switch (action.type) {
    case 'ALL_TODO':
      let obj = Object.assign({}, state)
      let new_list = obj.list.map(item => {
        return {
          index: item.index,
          text: item.text,
          complete: true
        }
      })
      return {
        list: new_list,
        text: '标记成功！'
      }
    case 'ALL_NOTDO':
      let obj2 = Object.assign({}, state)
      let new_list2 = obj2.list.map(item => {
        return {
          index: item.index,
          text: item.text,
          complete: false
        }
      })
      return {
        list: new_list2,
        text: '标记成功！'
      }
    case 'ADD_TODO':
      let obj_add = Object.assign({}, state)
      obj_add.list.unshift({
        index: obj_add.list.length,
        text: action.text,
        complete: false
      })
      return obj_add
    case 'COMPELETE_TODO':
      return {
        list: state.list.map(item => {
          if (item.index === action.index) {
            item.complete = !item.complete
          }
          return item
        }),
        msg: '1234'
      }
    case 'DELETE_TODO':
      debugger
      let obj_del = Object.assign({}, state)
      obj_del.list.splice(action.index, 1)
      return {
        list: obj_del.list,
        msg: '1234'
      }
    default:
      return state
  }
}
export default todos
