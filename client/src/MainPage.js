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
  const [mainText, setMainText] = useState("lalaro kaba?");
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
        setMainText("ehhh bading ka?");
        break;
      case 2:
        setMainText("pag pinindot mo yung no bading ka talaga");
        break;
      case 3:
        setMainText("yan bading talga amputa");
        break;
      case 4:
        setMainText("takot ka ata e");
        break;
      case 5:
        setMainText("tang ina bkt hindi");
        break;
      case 6:
        setMainText("dalian mo na jusko");
        break;
      case 7:
        setMainText("takot kaba sa jowa mo");
        break;
      case 8:
        setMainText("talaga bkt ayaw mo mag laro?");
        break;
      case 9:
        setMainText("tra ayain mo na din si joemar");
        break;
      case 10:
        setMainText("pa bebe pa amp");
        break;
      case 11:
        setMainText("last na to");
        break;
      case 12:
        setMainText("promise last na");
        break;
      case 13:
        setMainText("eto last na talga");
        break;
      case 14:
        setMainText("joke");
        break;
      default:
        setMainText("lalaro kaba?");
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



