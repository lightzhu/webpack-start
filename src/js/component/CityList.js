import React from "react";
import { hot } from "react-hot-loader/root";
// import { Menu, Icon } from "antd";
import { Select } from "antd";
import { getCityData } from "../actions/index";
import store from "../reducers/store";

const Option = Select.Option;

class CityList extends React.Component {
  state = {
    cities: [], //cityData[provinceData[0]],
    secondCity: [], //cityData[provinceData[0]][0],
    provinceData: store.getState().citys.provinceData,
    cityData: store.getState().citys.cityData
  };
  componentWillMount() {
    let provinceData = this.state.provinceData;
    let cityData = this.state.cityData;
    this.setState({
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0]
    });
  }
  handleProvinceChange = value => {
    this.setState({
      cities: this.state.cityData[value],
      secondCity: this.state.cityData[value][0]
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value
    });
  };
  render() {
    const { cities } = this.state;
    const { provinceData } = this.state;
    return (
      <div>
        <Select
          defaultValue={provinceData[0]}
          style={{ width: 120 }}
          onChange={this.handleProvinceChange}
        >
          {provinceData.map((province) => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        <Select
          style={{ width: 120 }}
          value={this.state.secondCity}
          onChange={this.onSecondCityChange}
        >
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        <slot />
      </div>
    );
  }
  componentWillUpdate() {

  }
  componentDidMount() {
    store.dispatch(getCityData());
    // console.log(getCitys());
    store.subscribe(() => {
      this.setState({
        provinceData: store.getState().citys.provinceData,
        cityData: store.getState().citys.cityData
      });
    });
  }
}

module.exports = hot(CityList);
