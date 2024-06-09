// components/BubbleBackground.js
import React from 'react';

const BubbleBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-blue-500">
        <div className="bubble bg-blue-300 w-24 h-24" style={{ left: '20%', top: '10%', transform: 'translateZ(0)' }}></div>
      <div className="bubble bg-blue-200 w-32 h-32" style={{ left: '40%', top: '30%', transform: 'translateZ(-100px)' }}></div>
      <div className="bubble bg-blue-100 w-16 h-16" style={{ left: '60%', top: '50%', transform: 'translateZ(-200px)' }}></div>
      <div className="bubble bg-blue-400 w-20 h-20" style={{ left: '80%', top: '70%', transform: 'translateZ(-300px)' }}></div>
      <div className="bubble bg-blue-200 w-28 h-28" style={{ left: '30%', top: '85%', transform: 'translateZ(-400px)' }}></div>
    
      <div className="bubble bg-blue-300 w-24 h-24" style={{ left: '10%', top: '20%', transform: 'translateZ(0)' }}></div>
      <div className="bubble bg-blue-200 w-32 h-32" style={{ left: '30%', top: '40%', transform: 'translateZ(-100px)' }}></div>
      <div className="bubble bg-blue-100 w-16 h-16" style={{ left: '50%', top: '50%', transform: 'translateZ(-200px)' }}></div>
      <div className="bubble bg-blue-400 w-20 h-20" style={{ left: '70%', top: '70%', transform: 'translateZ(-300px)' }}></div>
      <div className="bubble bg-blue-200 w-28 h-28" style={{ left: '90%', top: '85%', transform: 'translateZ(-400px)' }}></div>
    </div>
  );
};

export default BubbleBackground;
