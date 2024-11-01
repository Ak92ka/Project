import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProgressBar = ({ percentage, className, icon, skill, val }) => {
    return (
        <div className={`progress-bar ${className}`}>
            <div
                className="progress-bar__fill"
                style={{ width: `${percentage}%` }}

            >
                {typeof icon === "string" ? (
                    <img src={icon} alt={skill} className="skill-icon" height="400" width="" />
                    )    : (
                <FontAwesomeIcon icon={icon} className="skill-icon" />
                )}
                <span className="skill">{skill}</span>
                <span className="val">{val}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
