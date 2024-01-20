"use client"
import React from "react"

const Resume = () => {
  const openDriveLink = () => {
    const driveLink = 'https://drive.google.com/file/d/1gI7YegWRyyXeA6Y_b5jANqHDNx1ZcURv/view?usp=sharing';
    window.open(driveLink, '_blank');
  };
    
  return (
    <div>
      <button className="resume-btn" onClick={openDriveLink}>Check Resume</button>
    </div>
  )
};

export default Resume;
