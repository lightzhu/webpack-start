import React from "react";
import { Slider, InputNumber, Row, Col, Button, Icon } from "antd";
// import { createStore } from "redux";
import { hot } from "react-hot-loader/root";
import store from "../reducers/store";
let unsubscribe=null;
function counter(state = 10, action) {
  switch (action.type) {
    case "INCREMENT":
      return action.val + 1;
    case "DECREMENT":
      return state.val - 1;
    default:
      return state.val;
  }
}
// const store = createStore(counter);
class Slide extends React.Component {
  state = {
    inputValue: store.getState().slider
  };
  onChange = value => {
    store.dispatch({ type: "NORMAL", val: value });
    // this.setState({
    //   inputValue: value
    // });
  };
  handleMinus() {
    store.dispatch({ type: "DECREMENT"});
  }
  handlePlus(){
    store.dispatch({ type: "INCREMENT"});
  }
  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={10}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={2}>
          <Button onClick={this.handleMinus} style={{ width: '90%',marginRight:10}}>
            <Icon type="minus" />减
          </Button>
        </Col>
        <Col span={2}>
          <InputNumber
            min={1}
            max={20}
            style={{ }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
        <Col span={2}>
          <Button onClick={this.handlePlus} style={{ width: '90%',marginLeft:10}}>
            <Icon type="plus" />加
          </Button>
        </Col>
      </Row>
    );
  }
  componentDidMount() {
    unsubscribe = store.subscribe(() => {
      this.setState({
        inputValue: store.getState().slider
      });
    });
  }
  componentWillUnmount() {
    // unsubscribe();
  }
}
module.exports = hot(Slide);
