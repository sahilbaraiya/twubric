import React from 'react';

const SortButtons = ({ onSort, sortConfig }) => {
  const criteria = [
    { key: 'twubric.total', label: 'Total' },
    { key: 'twubric.friends', label: 'Friends' },
    { key: 'twubric.influence', label: 'Influence' },
    { key: 'twubric.chirpiness', label: 'Chirpiness' }
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {criteria.map((criterion) => (
        <button
          key={criterion.key}
          onClick={() => onSort(criterion.key)}
          className={`px-4 py-2 rounded ${sortConfig.criteria === criterion.key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          {criterion.label}
          {sortConfig.criteria === criterion.key && (sortConfig.direction === 'ascending' ? ' ▲' : ' ▼')}
        </button>
      ))}
    </div>
  );
};

export default SortButtons;
