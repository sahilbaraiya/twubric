import React from 'react';

const Follower = ({ follower, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 border rounded ">
      <div>
        <img src={follower.image} alt={follower.fullname} className="w-16 h-16 rounded-full mb-2" />
        <h2 className="text-lg font-bold">{follower.fullname}</h2>
        <p>Total: {follower.twubric.total}</p>
        <p>Friends: {follower.twubric.friends}</p>
        <p>Influence: {follower.twubric.influence}</p>
        <p>Chirpiness: {follower.twubric.chirpiness}</p>
        <p>Joined Date: {new Date(follower.join_date * 1000).toLocaleDateString()}</p>
      </div>
      <button
        onClick={() => onRemove(follower.uid)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default Follower;
