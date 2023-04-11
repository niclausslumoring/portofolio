import React from "react";
import "./about.css";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="uil uil-award-alt"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">7 Years Working</span>
      </div>

      <div className="about_box">
        <i class="uil uil-briefcase-alt"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">30+ Projects</span>
      </div>

      <div className="about_box">
        <i class="uil uil-book-open"></i>
        <h3 className="about_title">Study</h3>
        <span className="about_subtitle">4 Years Studying</span>
      </div>
    </div>
  );
};

export default Info;
