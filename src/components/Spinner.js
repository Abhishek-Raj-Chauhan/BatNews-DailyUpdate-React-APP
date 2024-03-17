import React from "react";
import loading from "./loading.gif";
export default function Spinner() {
  return (
    <div
      className="text-center"
      style={{
        width: "100%",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={loading} alt="loading" style={{ width: "200px" }} />
      <br />
      <p className="tex" style={{ color: "white" }}>
        Unveiling the Dark Knight's Secrets..
      </p>
    </div>
  );
}
