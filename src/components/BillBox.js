import React from "react";
import Button from "./Button";

function BillBox({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

      <label>Bill Value</label>
      <input type="text" />
      <label>Your Expense</label>
      <input type="text" />
      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>Who is paying?</label>
      <select>
        <option>You</option>
        <option>{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default BillBox;
