import React from "react";

import Friend from "./Friend";

function FriendsList({ data, onSelection, selectedFriend }) {
  return (
    <ul>
      {data.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendsList;
