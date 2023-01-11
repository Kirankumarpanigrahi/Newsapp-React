import React, { Component } from "react";
import loading from "./Maelstorm.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="h-200 d-flex justify-content-center align-items-center">
        <img src={loading} alt="loading..."></img>
      </div>
    );
  }
}
