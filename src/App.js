import React, { useState } from "react";
import "./App.css";
import Field from "./Field";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function addData() {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div>
      <h1>Header</h1>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit" onClick={addData}>
        Add
      </button>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <button onClick={() => removeItem("index")}>Remove</button>
        </div>
        {data.map((element, index) => {
          return (
            <Field
              key={index}
              name={element.name}
              email={element.email}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
