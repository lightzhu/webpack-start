import React from "react";
import { List, Input,Typography,message } from "antd";
import { createStore } from "redux";
import { hot } from "react-hot-loader/root";
class ToDoList extends React.Component {
  state = {
    data: [
      {index:0,text:"Racing car sprays burning fuel into crowd.",complete:'true'},
      {index:1,text:"Japanese princess to wed commoner.",complete:'true'},
      {index:2,text:"Australian walks 100km after outback crash.",complete:'fasle'},
      {index:3,text:"Racing car sprays burning fuel into crowd.",complete:'fasle'},
      {index:4,text:"Man charged over missing wedding girl.",complete:'fasle'},
      {index:5,text:"Los Angeles battles huge wildfires.",complete:'true'},
      {index:6,text:"Racing car sprays burning fuel into crowd.",complete:'fasle'},
    ],
    textInput:''
  };
  inputChange(value){
    // console.log(value)
    // this.setState({textInput:value})
  }
  addTask(task){
    if(task.trim()){
      this.setState({
        data:[{index:this.state.data.length,text:task,complete:'false'},...this.state.data]
      })
    }else{
      message.error('你没有输入任何任务！');
    }
  }
  completeTask(index){
    console.log(index);
  }
  deleteTask(index){
    console.log(index);
  }
  render() {
    return (
      <div>
        <h3 style={{ margin: "16px 0",textAlign:"center"}}>
          <Input.Search
            className="add-input"
            placeholder="请输入任务"
            enterButton="添加"
            size="large"
            // onChange={(value)=>{this.inputChange(value)}}
            onSearch={(value)=>{this.addTask(value)}}
          />
        </h3>
        <List
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          dataSource={this.state.data}
          renderItem={(item) => {
            return(<List.Item 
              className="tools" 
              actions={[<a onClick={this.completeTask.bind(this,item.index)}>完成</a>, 
                <a onClick={this.deleteTask.bind(this,item.index)}>删除</a>]}>
                <Typography.Text 
                className="list-content" delete={item.complete==="true"?true:false}>{item.text}</Typography.Text>
              </List.Item>)
          }}
        />
      </div>
    );
  }
  componentDidMount() {}
}
module.exports = hot(ToDoList);
