import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = "6";
  apikey = "417caaf3b95a4051a300a3385abe64b9";
  state = { progess: 0, country: "in" };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="business"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="entertainment"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path={`/${this.category}/us`}
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="entertainment"
                  pagesize={this.pagesize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="sports"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="science"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="health"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category="health"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
