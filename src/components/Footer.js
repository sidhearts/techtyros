import React from "react";
import '../stylesheets/home.css';

export default function Footer() {
  return (
    <div className="container-fluid footer p-3">
      <div className="row">
        <div className="col">
          Tech-Tyros
        </div>
        <div className="col mt-3 d-flex justify-content-center">
          <a href="#" className="footer-link">
            Privacy
          </a>
          <a href="#" className="footer-link ml-2">
              Terms &amp; Conditions
          </a>
        </div>
        <div className="col mt-3 d-flex justify-content-right text-right">
            <small className="mr-2" style={{color: "white"}}>&copy;2020 markSports. All rights reserved</small>
        </div>
      </div>
    </div>
  );
}