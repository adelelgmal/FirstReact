import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>  
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="card-wrapper">
          <div
            className="card-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={props.imgsrc}
              className="card-image"
              
            />

            {/* Overlay */}
            <div className={`card-overlay ${isHovered ? "active" : ""}`}>
              <div className="card-content">
                <h5 className="card-title">Project</h5>
                <p className="card-description">
                  Amazing project
                </p>
                
              </div>
            </div>

            {/* Plus Icon */}
            
          </div>
        </div>
      </div>
    </>
  );
}
