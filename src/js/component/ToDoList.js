import React from 'react'
import { List, Input, Typography, message, Icon } from 'antd'
// import { createStore } from "redux";
// import todos from "../reducers/index";
// let store = createStore(todos); //根据reducer创建一个store
import store from '../reducers/store' //将多个reduce组合后导入
import {
  allTodo,
  addTodo,
  deleteTodo,
  completeTodo,
  allUnTodo
} from '../actions/index'
import { hot } from 'react-hot-loader/root'
import TodoHead from './TodoHead'
import Slide from './Slide'
let unsubscribe = null
class ToDoList extends React.Component {
  state = {
    data: [],
    textInput: ''
  }
  inputChange(event) {
    this.setState({ textInput: event.target.value })
  }
  addTask(task) {
    if (task.trim()) {
      store.dispatch(addTodo(task.trim()))
      this.setState({ textInput: '' })
    } else {
      message.error('你没有输入任何任务！')
    }
  }
  completeTask(index) {
    store.dispatch(completeTodo(index))
  }
  deleteTask(index) {
    store.dispatch(deleteTodo(index))
  }
  changeType(type) {
    let newList = []
    let that = this
    if (type === 'all') {
      newList = store.getState().todos.list
    } else if (type === 'schedule') {
      let list = store.getState().todos.list
      newList = []
      list.forEach(item => {
        if (!item.complete) {
          newList.push(item)
        }
      })
    } else {
      let list2 = store.getState().todos.list
      newList = []
      list2.forEach(item => {
        if (item.complete) {
          newList.push(item)
        }
      })
    }
    that.setState({
      data: newList
    })
  }
  allDid() {
    store.dispatch(allTodo())
  }
  allUnDid() {
    store.dispatch(allUnTodo())
  }
  render() {
    return (
      <div>
        <Slide />
        <h3 style={{ margin: '16px 0', textAlign: 'center' }}>
          <Input.Search
            className="add-input"
            placeholder="请输入任务"
            enterButton="添加"
            size="large"
            value={this.state.textInput}
            onChange={e => {
              this.inputChange(e)
            }}
            onSearch={value => {
              this.addTask(value)
            }}
          />
        </h3>
        <List
          size="large"
          header={<TodoHead changeType={this.changeType.bind(this)} />}
          footer={
            <div className="footer">
              <span onClick={this.allDid.bind(this)}>全部标记完成</span>
              <span onClick={this.allUnDid.bind(this)}>全部标记未完成</span>
            </div>
          }
          dataSource={this.state.data}
          renderItem={item => {
            return (
              <List.Item
                className="tools"
                actions={[
                  <a onClick={this.completeTask.bind(this, item.index)}>
                    <Icon
                      type={item.complete ? 'pushpin' : 'flag'}
                      style={{ marginRight: '10px' }}
                    />
                    {item.complete ? '重置' : '完成'}
                  </a>,
                  <a onClick={this.deleteTask.bind(this, item.index)}>
                    <Icon type="delete" style={{ marginRight: '10px' }} />
                    删除
                  </a>
                ]}>
                <Typography.Text
                  className="list-content"
                  delete={item.complete ? true : false}>
                  {item.text}
                </Typography.Text>
              </List.Item>
            )
          }}
        />
      </div>
    )
  }
  componentWillUpdate() {
    // unsubscribe();
    let that = this
    unsubscribe = store.subscribe(() => {
      that.setState({
        data: store.getState().todos.list
      })
    })
  }
  componentDidMount() {
    this.setState({
      data: store.getState().todos.list
    })
  }
  componentWillUnmount() {
    // unsubscribe();
  }
}
module.exports = hot(ToDoList)
