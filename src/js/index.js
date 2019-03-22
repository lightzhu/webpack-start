import React from 'react';
import ReactDOM from 'react-dom';
import { version, Button } from 'antd';
import Header from './component/Header';
// import 'antd/dist/antd.css';
import "../css/react.scss"
class App extends React.Component {
  render() {
    return (
      <div>

        <Header>
          
        </Header>
        <header>
          <ul>
            <li>11111</li>
            <li>22222</li>
            <li>3333</li>
          </ul>
          <Button type="primary">Hello</Button>
        </header>
      </div>
    );
  }
  componentDidMount(){
    this.sayHello();
  }
  sayHello(){
    console.log("hello tototoo!");
  }
};
ReactDOM.render(<App></App>,  document.getElementById("app"));