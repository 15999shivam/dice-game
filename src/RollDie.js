import React, { Component } from "react";
import Die from "./Die";
import "./rolldie.css";

export default class RollDie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 1,
      die2: 6,
      score: 0,
      isrolling: false
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    this.setState({
      die1: Math.floor(Math.random() * 6 + 1),
      die2: Math.floor(Math.random() * 6 + 1),
      isrolling: true
    });

    //wait one sec and set roll to false.
    setTimeout(() => {
      this.setState({ isrolling: false });
    }, 500);
  }
  render() {
    return (
      <div className='roll-dice'>
        <div className='roll-dice-dies'>
          <Die number={this.state.die1} rolling={this.state.isrolling} />
          <Die number={this.state.die2} rolling={this.state.isrolling} />
        </div>
        <button
          onClick={this.roll}
          className='roll-dice-button'
          disabled={this.state.isrolling}
        >
          {this.state.isrolling ? "Rolling" : "Roll"}
        </button>
      </div>
    );
  }
}
