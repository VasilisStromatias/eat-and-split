import React from "react";

import Friend from "./Friend";

function FriendsList({ data }) {
  return (
    <ul>
      {data.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}

export default FriendsList;
