import React, { Component } from "react";

class TopSection extends Component {
  render() {
    let { data } = this.props;
    let some = this.props.data;
    let val = 12;
    this.props.methodForCHild(val);

    return (
      <div>
        <p> {this.props.data} </p>
        <p> Counter from child {this.props.number}</p>
      </div>
    );
  }
}

export default TopSection;
