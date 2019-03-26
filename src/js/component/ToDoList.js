import React from "react";
import { List, Input, Typography, message, Icon } from "antd";
import { createStore } from "redux";
import todos from "../reducers/index";
import { allTodo,addTodo, deleteTodo, completeTodo,didTodo,planTodo } from "../actions/index";
let store = createStore(todos); //根据reducer创建一个store
import { hot } from "react-hot-loader/root";
import TodoHead from "./TodoHead";
class ToDoList extends React.Component {
  state = {
    data: store.getState().todos.list,
    textInput: ""
  };
  inputChange(event) {
    this.setState({ textInput: event.target.value });
  }
  addTask(task) {
    if (task.trim()) {
      // this.setState({
      //   data:[{index:this.state.data.length,text:task,complete:'false'},...this.state.data]
      // })
      store.dispatch(addTodo(task.trim()));
      this.setState({ textInput: "" });
    } else {
      message.error("你没有输入任何任务！");
    }
  }
  completeTask(index) {
    store.dispatch(completeTodo(index));
  }
  deleteTask(index) {
    store.dispatch(deleteTodo(index));
  }
  changeType(type) {
    if(type==='schedule'){
      store.dispatch(planTodo());
    }else if(type==='compele'){
      store.dispatch(didTodo());
    }else{
      store.dispatch(allTodo());
    }
  }
  render() {
    return (
      <div>
        <h3 style={{ margin: "16px 0", textAlign: "center" }}>
          <Input.Search
            className="add-input"
            placeholder="请输入任务"
            enterButton="添加"
            size="large"
            value={this.state.textInput}
            onChange={e => {
              this.inputChange(e);
            }}
            onSearch={value => {
              this.addTask(value);
            }}
          />
        </h3>
        <List
          size="large"
          header={<TodoHead changeType={this.changeType} />}
          footer={<div>Footer</div>}
          dataSource={this.state.data}
          renderItem={item => {
            return (
              <List.Item
                className="tools"
                actions={[
                  <a onClick={this.completeTask.bind(this, item.index)}>
                    <Icon
                      type={item.complete ? "pushpin" : "flag"}
                      style={{ marginRight: "10px" }}
                    />
                    {item.complete ? "重置" : "完成"}
                  </a>,
                  <a onClick={this.deleteTask.bind(this, item.index)}>
                    <Icon type="delete" style={{ marginRight: "10px" }} />
                    删除
                  </a>
                ]}
              >
                <Typography.Text
                  className="list-content"
                  delete={item.complete ? true : false}
                >
                  {item.text}
                </Typography.Text>
              </List.Item>
            );
          }}
        />
      </div>
    );
  }
  componentWillMount() {
    let that = this;
    store.subscribe(() => {
      that.setState({
        data: store.getState().todos.list
      });
    });
  }
  componentDidMount() {
    console.log(store.getState());
  }
}
module.exports = hot(ToDoList);
