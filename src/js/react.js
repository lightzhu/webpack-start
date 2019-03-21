import React from 'react';
import ReactDOM from 'react-dom';
import "../css/react.scss"
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>11111</li>
            <li>22222</li>
            <li>3333</li>
          </ul>
          Logged in as Jane
        </header>
      </div>
    );
  }
};

ReactDOM.render(<App></App>,  document.getElementById("app"));