import React, { useState } from 'react';

function Ads() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Your ad code goes here */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <a href="https://example.com">
              <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg" alt="Advertisement" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ads;
