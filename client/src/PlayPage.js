// PlayPage.js
import React from "react";
import backgroundImage from "./5116445.jpg"; // Import your background image
import gifImage from "./giphy.gif"; // Import your GIF image

function PlayPage() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "0px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={gifImage}
        alt="GIF"
        style={{ width: "200px", marginBottom: "20px" }}
      />
      <h1 style={{ color: "white" }}>tra tang ina mo online na</h1>
    </div>
  );
}

export default PlayPage;
