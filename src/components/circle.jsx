// src/components/Circle.jsx
import React from 'react';

const Circle = ({ size, color, position, opacity }) => {
  return (
    <div
      className={`absolute rounded-full ${position}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity: opacity,
      }}
    ></div>
  );
};

export default Circle;
