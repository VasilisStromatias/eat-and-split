import React from "react";

function Button({ children, handleAddForm }) {
  return (
    <button className="button" onClick={handleAddForm}>
      {children}
    </button>
  );
}

export default Button;
