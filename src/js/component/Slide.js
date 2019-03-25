import React from "react";
import { Slider, InputNumber, Row, Col } from "antd";
import { createStore } from "redux";
import { hot } from "react-hot-loader/root";

function counter(state = 10, action) {
  switch (action.type) {
    case "INCREMENT":
      return action.val+1;
    case "DECREMENT":
      return state.val-1;
    default:
      return state.val;
  }
}
const store = createStore(counter);
class Slide extends React.Component {
  state = {
    inputValue: 5
  };
  onChange = value => {
    store.dispatch({ type: 'INCREMENT',val:value });
    this.setState({
      inputValue: value
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
  componentDidMount(){
    store.subscribe(() => console.log(store.getState()));
  }
}
module.exports = hot(Slide);
