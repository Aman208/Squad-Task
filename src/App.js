import React, { Component } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 3,
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <Navbar
            activeItem={this.state.activeItem}
            call_back={this.handle_item}
          />
        </div>
      </div>
    );
  }
}

export default App;
