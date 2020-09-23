import React, { Component } from "react";

import Modal from './Modal';

import "../Styles/singlecard.css";

class SingleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.setOpen = this.setOpen.bind(this);
  }

  setOpen(val) {
    this.setState({ open: val });
  }

  render() {
    return (
      <div>
        {this.props.type === "gen" ? (
          <div onClick={() => this.props.activate}>
            <div className="card-head">Qualified {this.props.num}</div>
            <br />
            <div class="val1-div">
              <span className="val1">
                {this.props.val1}
                <br />
              </span>
              <span className="val1-txt">Per Qualified Lead</span>
            </div>
            <hr />
            <div className="val2-div">
              <span className="val2-txt">
                Qualified Leads Per Month
                <br />
              </span>
              <span className="val2">{this.props.val2}</span>
            </div>
            <hr />
            <div>
              Platform Fee Per Month <br />
              {this.props.val3}
            </div>
            <br />
            <div>
              <div className="card-head">
                {" "}
                ${this.props.val4}/mon {this.props.num}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="card-head">Enterprise</div>
            <div style={{ background: "azure", height: "100%" }}>
              <br />
              <span style={{ "font-size": "24px", textAlign: "center" }}>
                <br />
                <br />
                <br />
                Want more than 80 Qualified Leads each month?
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </span>
            </div>
          </div>
        )}

        <Modal  plan_selected={this.props.num}/>
      </div>
    );
  }
}

export default SingleCard;
