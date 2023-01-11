import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const setcountryIN = () => {
  //   props.setCountry("in");
  //   props.setProgress(50);
  // };
  // const setcountryUS = () => {
  //   props.setCountry("us");
  // };
  // const setcountryNZ = () => {
  //   props.setCountry("nz");
  // };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="text-light h2 text-decoration-none"
            style={{ padding: "0px 10px" }}
            to="/"
          >
            Dailynews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse h-50 "
            id="navbarSupportedContent"
          >
            <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <Link className="nav-link" aria-current="page" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item px-2 font-weight-bold">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item px-2 font-weight-bold">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item px-2 font-weight-bold">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item px-2 font-weight-bold">
                <Link className="nav-link" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item px-2 font-weight-bold">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
            </ul>
            {/* <div
              style={{
                color: "white",
                background: "#343a40",
                borderColor: "#343a40",
              }}
            >
              <select>
                <option value="IN" onClick={setcountryIN}>
                  IN
                </option>

                <option value="US" onClick={setcountryUS}>
                  US
                </option>

                <option value="NZ" onClick={setcountryNZ}>
                  NZ
                </option>
              </select>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
