import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.users); // Assuming data returned from API has a 'users' property
      });
  }, []); // Moved the dependency array inside the useEffect hook

  return (
    <div>
      {/* Display fetched data */}
      {backendData.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default App;
