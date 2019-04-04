import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer", color: "green" }}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
