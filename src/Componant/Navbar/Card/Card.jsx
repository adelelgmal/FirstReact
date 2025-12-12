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
              alt={props.title || "Portfolio item"}
            />

            {/* Overlay */}
            <div className={`card-overlay ${isHovered ? "active" : ""}`}>
              <div className="card-content">
                <h5 className="card-title">{props.title || "Project"}</h5>
                <p className="card-description">
                  {props.description || "Amazing project"}
                </p>
                <div className="card-icons">
                  <a
                    href={props.link || "#"}
                    className="icon-btn"
                    title="View Project"
                  >
                    <i className="bi bi-eye-fill"></i>
                  </a>
                  <a
                    href={props.github || "#"}
                    className="icon-btn"
                    title="View Code"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Plus Icon */}
            <div className="plus-icon">
              <i className="bi bi-plus-circle-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
