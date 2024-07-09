import React, { useState, useEffect } from "react";
import FollowerList from "./components/FollowerList";
import SortButtons from "./components/SortButtons";
import DateFilter from "./components/DateFilter";
import followersData from "./twubric.json";

const App = () => {
  const [followers, setFollowers] = useState([]);
  const [sortedFollowers, setSortedFollowers] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    criteria: null,
    direction: "ascending",
  });

  useEffect(() => {
    setFollowers(followersData);
    setSortedFollowers(followersData);
  }, []);

  //remove follower
  const handleRemove = (id) => {
    const updatedFollowers = followers.filter(
      (follower) => follower.uid !== id
    );
    setFollowers(updatedFollowers);
    setSortedFollowers(updatedFollowers);
  };

  //handle sort 
  const handleSort = (criteria) => {
    let direction = "ascending";
    if (
      sortConfig.criteria === criteria &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    // Sorting function 
    const sorted = [...sortedFollowers].sort((a, b) => {
      let aValue, bValue;
      if (criteria.includes(".")) {
        const [parent, child] = criteria.split(".");
        aValue = a[parent][child];
        bValue = b[parent][child];
      } else {
        aValue = a[criteria];
        bValue = b[criteria];
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
        return direction === "ascending"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return direction === "ascending" ? aValue - bValue : bValue - aValue;
      }
    });

    setSortedFollowers(sorted);
    setSortConfig({ criteria, direction });

    console.log(
      `Sorted followers by ${criteria} in ${direction} order:`,
      sorted
    );
  };

  //to handle date filter
  const handleFilter = (startDate, endDate) => {
    const filtered = followers.filter((follower) => {
      const joinDate = new Date(follower.join_date * 1000); 
      return joinDate >= startDate && joinDate <= endDate;
    });
    setSortedFollowers(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 bg-slate-800 text-white w-full h-16 text-center p-3">Twubric App</h1>
      <h1 className="text-xl  mb-4">Sort By</h1>
      <SortButtons onSort={handleSort} sortConfig={sortConfig} />
      <h1 className="text-xl  mb-4">Joined Twitter between</h1>
      <DateFilter onFilter={handleFilter} />
      <FollowerList followers={sortedFollowers} onRemove={handleRemove} />
    </div>
  );
};

export default App;
