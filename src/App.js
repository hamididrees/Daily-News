import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <BrowserRouter>
        <LoadingBar color="#f11946" height={4} progress={this.state.progress} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
