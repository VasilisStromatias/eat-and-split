import React from "react";

import Button from "./Button";

function Friend({ friend, handleForm }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and your {friend.name} are even</p>}
      <Button handleForm={handleForm}>Select</Button>
    </li>
  );
}

export default Friend;
