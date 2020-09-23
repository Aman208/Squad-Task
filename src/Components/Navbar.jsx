import React, { Component } from "react";

import { Button, Divider } from "semantic-ui-react";
import CardList from "./CardList";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 3,
    };

    this.handle_click = this.handle_click.bind(this);
  }

  handle_click = (e, val) => {
    e.preventDefault();
    this.setState({ activeItem: val });
    console.log(this.state.activeItem);
  };

  render() {
    return (
      <div>
        <Button.Group widths="5" basic>
          <Button
           
           active={this.state.activeItem === 1}
            onClick={(e) => this.handle_click(e, 1)}
          >
            {"$100k-$200k"}
          </Button>
          <Button
            active={this.state.activeItem === 2}
            onClick={(e) => this.handle_click(e, 2)}
          >
            {"$200k-$300k"}
          </Button>
          <Button
            active={this.state.activeItem === 3}
            onClick={(e) => this.handle_click(e, 3)}
          >
            {"$300k-$400k"}
          </Button>
          <Button
            active={this.state.activeItem === 4}
            onClick={(e) => this.handle_click(e, 4)}
          >
            {"$400k-$500k"}
          </Button>
          <Button
            active={this.state.activeItem === 5}
            onClick={(e) => this.handle_click(e, 5)}
          >
            {"$500k+"}
          </Button>
        </Button.Group>
        <Divider />
        <CardList activeItem={this.state.activeItem} />
      </div>
    );
  }
}

export default Navbar;
