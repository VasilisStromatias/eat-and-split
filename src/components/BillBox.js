import React, { useState } from "react";
import Button from "./Button";

function BillBox({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpence, setMyExpense] = useState("");
  const friendExpense = bill ? bill - myExpence : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !myExpence) return;

    onSplitBill(whoIsPaying === "user" ? friendExpense : -myExpence);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input
        type="text"
        value={myExpence}
        onChange={(e) =>
          Number(e.target.value) > bill
            ? myExpence
            : setMyExpense(Number(e.target.value))
        }
      />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>Who is paying?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default BillBox;
