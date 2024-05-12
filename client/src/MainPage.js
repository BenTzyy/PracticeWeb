// MainPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import backgroundImage from "./5116445.jpg";
import gifImage from "./1.gif";

function MainPage() {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [mainText, setMainText] = useState("pao pao law.ay");
  const [yesButtonSize, setYesButtonSize] = useState(16);

  const handleYesClick = () => {
    navigate("/play");
  };

  const handleNoClick = () => {
    let x, y;
    do {
      x = Math.floor(Math.random() * (window.innerWidth - 100));
      y = Math.floor(Math.random() * (window.innerHeight - 100));
    } while (isNearCenter(x, y));

    setNoButtonPosition({ x, y });
    setNoButtonClicks((prevClicks) => prevClicks + 1);
    setYesButtonSize((prevSize) => prevSize + 2);
  };

  const isNearCenter = (x, y) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );
    return distance < 200; // Adjust the value to control the "near center" radius
  };

  React.useEffect(() => {
    switch (noButtonClicks) {
      case 1:
        setMainText("pao pao law.ay");
        break;
      case 2:
        setMainText("pao pao law.ay");
        break;
      case 3:
        setMainText("ypao pao law.ay");
        break;
      case 4:
        setMainText("pao pao law.ay");
        break;
      case 5:
        setMainText("pao pao law.ay");
        break;
      case 6:
        setMainText("pao pao law.ay");
        break;
      case 7:
        setMainText("pao pao law.ay");
        break;
      case 8:
        setMainText("pao pao law.ay");
        break;
      case 9:
        setMainText("tpao pao law.ay");
        break;
      case 10:
        setMainText("pao pao law.ay");
        break;
      case 11:
        setMainText("pao pao law.ay");
        break;
      case 12:
        setMainText("pao pao law.ay");
        break;
      case 13:
        setMainText("pao pao law.ay");
        break;
      case 14:
        setMainText("pao pao law.ay");
        break;
      default:
        setMainText("pao pao law.ay");
    }
  }, [noButtonClicks]);

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
      <h1 style={{ color: "white" }}>{mainText}</h1>
      <div>
        <button onClick={handleYesClick} style={{ fontSize: yesButtonSize }}>
          Yes
        </button>
        <button
          onClick={handleNoClick}
          style={{
            position:
              noButtonPosition.x === 0 && noButtonPosition.y === 0
                ? "static"
                : "absolute",
            left: noButtonPosition.x,
            top: noButtonPosition.y,
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default MainPage;
