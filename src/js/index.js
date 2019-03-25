import React from "react";
import ReactDOM from "react-dom";
import { version, Button,message } from "antd";
import Header from "./component/Header";
import Body from "./component/Body";
// import 'antd/dist/antd.css';
import "../sass/react.scss";
message.config({
  top: 200,
  duration: 2,
  maxCount: 3,
});
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body></Body>
      </div>
    );
  }
  componentDidMount() {
    this.sayHello();
  }
  sayHello() {
    console.log("hello tototoo!");
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
