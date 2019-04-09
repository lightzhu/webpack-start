import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CityWeather from "./CityWeather";
import ToDoList from "./ToDoList";
const { SubMenu } = Menu;
const { Sider, Content } = Layout;
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail"
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Sider>
              <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        简单路由
                      </span>
                    }
                  >
                    <Menu.Item key="1">
                      <Link to="/">待办事项</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/CityWeather">城市天气</Link>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        subnav 2
                      </span>
                    }
                  >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
            </Sider>
            <Content style={{ margin: "20px 50px" }}>
              <Switch>
                <Route exact path="/" component={ToDoList} />
                <Route path="/CityWeather" component={CityWeather} />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </div>
    );
  }
  componentDidMount() {
    console.log("身体组件加载了！");
  }
}

module.exports = hot(Body);
