import React from 'react';

export default function Filter({ selectedFilter, onFilterChange }) {
    const filters = ['Tous', 'HTML', 'Javascript', 'CSS', 'React', 'Backend'];

    return (
        <div className="projets-buttons">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={selectedFilter === filter ? 'active-filter' : ''}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
