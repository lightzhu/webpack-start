import React from "react";
import { hot } from "react-hot-loader/root";
import { Button, Radio, Divider } from "antd";

class TodoHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "all"
    };
  }
  handleTypeChange = e => {
    this.props.changeType(e.target.value);
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Radio.Group
          defaultValue="all"
          buttonStyle="solid"
          onChange={this.handleTypeChange}
        >
          <Radio.Button value="all">全部</Radio.Button>
          <Radio.Button value="schedule">待办</Radio.Button>
          <Radio.Button value="compele">已完成</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props);
  }
}

module.exports = hot(TodoHead);
