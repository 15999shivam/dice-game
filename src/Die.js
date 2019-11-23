import React, { Component } from "react";
import "./die.css";
export default class Die extends Component {
  constructor(props) {
    super(props);
    this.dice = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six"
    };
  }
  render() {
    return (
      <div className='die'>
        <i
          className={`fas fa-dice-${this.dice[this.props.number]} ${this.props
            .rolling && "rolling"}`}
        ></i>
      </div>
    );
  }
}
