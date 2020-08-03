import React, { Component } from "react";
import "./App.css";
import Quote from "./components/Quote";
import "./styles.scss";

class App extends Component {
  state = {
    key: 0,
  };

  handleClick = () => {
    this.setState({ key: Math.random() });
  };

  render() {
    return (
      <React.Fragment>
        <Quote key={this.state.key} />
        <button className="btn-quote" onClick={this.handleClick}>
          Get a new Quote
        </button>
      </React.Fragment>
    );
  }
}

export default App;
