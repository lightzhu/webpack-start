import React from "react";
import { hot } from "react-hot-loader/root";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail"
    };
  }
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
      城市天气预报
      </div>
    );
  }
  componentDidMount() {
    console.log("天气预报加载了！");
  }
}

module.exports = hot(Weather);
