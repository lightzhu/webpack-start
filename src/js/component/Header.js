import React from "react";
import { hot } from "react-hot-loader/root";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
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
      <Menu
        style={{marginLeft:"200px"}}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="desktop" />
          首页
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />
          实况
        </Menu.Item>
        <Menu.Item key="chart">
          <Icon type="bar-chart" />
          统计
        </Menu.Item>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            连接到Antd
          </a>
        </Menu.Item>
      </Menu>
    );
  }
  componentDidMount() {
    console.log("头部组件加载了！");
  }
}

module.exports = hot(Header);
