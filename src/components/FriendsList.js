import React from "react";

import Friend from "./Friend";

function FriendsList({ data, handleForm }) {
  return (
    <ul>
      {data.map((friend) => {
        return (
          <Friend friend={friend} key={friend.id} handleForm={handleForm} />
        );
      })}
    </ul>
  );
}

export default FriendsList;
