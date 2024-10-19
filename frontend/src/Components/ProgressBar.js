import React from 'react';

const ProgressBar = ({ percentage, className, src, skill, val, alt }) => {
    return (
        <div className={`progress-bar ${className}`}>            <div
            className="progress-bar__fill"
            style={{ width: `${percentage}%` }}
            
        >
            <img src={src} alt={alt} className='skill-image'></img>
            <span className="skill">{skill}</span>
            <span className="val">{val}</span>
        </div>
        </div>
    );
};

export default ProgressBar;
