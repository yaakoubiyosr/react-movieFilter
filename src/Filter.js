import React from 'react';

function Filter({ onTitleChange, onRatingChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={e => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filter by rating"
        onChange={e => onRatingChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;