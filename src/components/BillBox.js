import React from "react";
import Button from "./Button";

function BillBox() {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH X</h2>

      <label>Bill Value</label>
      <input type="text" />
      <label>Your Expense</label>
      <input type="text" />
      <label>X's expense</label>
      <input type="text" disabled />

      <label>Who is paying?</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default BillBox;
