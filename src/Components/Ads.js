import React, { useState, useEffect } from 'react';
import "./AdsStyles.css";

function Ads() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // display the popup after 5 seconds

    return () => clearTimeout(timer); // cleanup the timer when the component unmounts
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSkip = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <a href="http://localhost:3000/contact">
              <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg" alt="Advertisement" />
            </a>
            <button onClick={handleSkip}>Skip Ad</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ads;
