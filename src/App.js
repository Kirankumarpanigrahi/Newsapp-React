import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const pagesize = 6;
  const apikey = "417caaf3b95a4051a300a3385abe64b9";
  const [progress, setProgress] = useState(0);
  // const [country, setCountry] = useState("in");
  const setCountry = "in";
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                pagesize={pagesize}
                setCountry={setCountry}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                pagesize={pagesize}
                setCountry={setCountry}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="entertainment"
                pagesize={pagesize}
                setCountry={setCountry}
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="sports"
                pagesize={pagesize}
                setCountry={setCountry}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="science"
                pagesize={pagesize}
                setCountry={setCountry}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="health"
                pagesize={pagesize}
                setCountry={setCountry}
                category="health"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
