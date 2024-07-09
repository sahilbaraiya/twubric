import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = () => {
    if (startDate && endDate) {
      onFilter(startDate, endDate);
    } else {
      console.error('Please select both start and end dates');
    }
  };

  return (
    <div className="flex space-x-2 mb-4">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="From Date"
        className="px-4 py-2 border rounded"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="To Date"
        className="px-4 py-2 border rounded"
      />
      <button onClick={handleFilter} className="px-4 py-2 bg-green-500 text-white rounded">
        Filter
      </button>
    </div>
  );
};

export default DateFilter;
