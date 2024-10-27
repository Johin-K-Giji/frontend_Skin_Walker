// src/components/OrganicCircles.js
import React from 'react';
import './circles.css'

const OrganicCircles = ({ circles }) => {
  return (
    <div className="absolute inset-0 -z-10">
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top || 'auto',
            bottom: circle.bottom || 'auto',
            left: circle.left || 'auto',
            right: circle.right || 'auto',
          }}
          className="absolute bg-green-300 opacity-30 rounded-full"
        ></div>
      ))}
    </div>
  );
};

export default OrganicCircles;
