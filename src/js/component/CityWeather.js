import React from "react";
import { hot } from "react-hot-loader/root";
import CityList from "./CityList";
// import { Menu, Icon, Divider } from "antd";

class CityWeather extends React.Component {
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
        <h3>天气页面</h3>
        <CityList>
          这里是插槽内容
        </CityList>
      </div>
    );
  }
  componentDidMount() {
    
  }
}

module.exports = hot(CityWeather);
