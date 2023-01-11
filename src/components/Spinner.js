import React from "react";
import loading from "./Maelstorm.gif";
export default function Spinner() {
  return (
    <div className="h-200 d-flex justify-content-center align-items-center">
      <img src={loading} alt="loading..."></img>
    </div>
  );
}
