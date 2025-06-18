import React from 'react';

function FilterButtons({ filter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="filter-buttons">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={f === filter ? 'active' : ''}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
