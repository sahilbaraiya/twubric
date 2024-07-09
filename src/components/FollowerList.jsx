import React from 'react';
import Follower from './Follower';

const FollowerList = ({ followers, onRemove }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {followers.map((follower) => (
        <Follower key={follower.uid} follower={follower} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default FollowerList;
