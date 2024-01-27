"use client"
import { useState,useEffect } from "react";


const TypeEffect = () => {
  const [text, setText] = useState(''); // Initial state is an empty string

  const textLoad = () => {
    setTimeout(() => {
      setText('Front End Developer'); 
    }, 0);
    setTimeout(() => {
      setText('Web Developer');
    }, 4500);
    setTimeout(() => {
      setText('React Developer');
    }, 8500);
    setTimeout(() => {
        setText('Next Js Developer');
    }, 12500);
  };

  useEffect(() => {
    // Initial load
    textLoad();
    // Set up an interval for text changes
    const intervalId = setInterval(textLoad, 16500);
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="container">
          <span className="text first-text">I am a  </span>
          <span className="text sec-text">{text}</span>
        </div>
    </div>
  )
};

export default TypeEffect;
