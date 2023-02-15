import React from "react";

const Field = ({ name, email, index }) => {
  return (
    <div>
      <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Field;
