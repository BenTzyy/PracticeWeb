// MainPage.js
import React from "react";

function MainPage() {
  const history = useHistory();
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handleYesClick = () => {
    history.push("/play");
  };

  const handleNoClick = () => {
    setShowPlayButton(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Do you want to play?</h1>
      {showPlayButton ? (
        <div>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </div>
      ) : (
        <div>
          <h2>Moved buttons to another location!</h2>
          <button onClick={() => setShowPlayButton(true)}>
            Show Buttons Again
          </button>
        </div>
      )}
    </div>
  );
}

export default MainPage;
