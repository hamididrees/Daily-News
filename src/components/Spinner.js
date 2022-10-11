import React, { Component } from "react";
import spinner from "../spinner.gif";
export class Spinner extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center align-content-center my-lg-3">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }
}

export default Spinner;
