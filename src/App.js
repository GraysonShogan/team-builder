import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "",
  });
  //
  // Create state variables to hold team members and hold form values
  //
  // Create update and submit functions
  //
  const onSubmit = () => {
    setMembers([values, ...members]);
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
    </div>
  );
}

export default App;
