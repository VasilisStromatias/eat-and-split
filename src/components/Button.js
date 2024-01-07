import React from "react";

function Button({ children, handleForm }) {
  return (
    <button className="button" onClick={handleForm}>
      {children}
    </button>
  );
}

export default Button;
