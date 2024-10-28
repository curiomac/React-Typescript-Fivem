import React, { FormEvent } from "react";
import { fetchNui } from "../../utils/fetchNui";

const TestForm = () => {
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchNui("closeVisible")
  };
  return (
    <form onSubmit={handleForm}>
      <h3>Authenticate</h3>
      <label>Enter your Password: </label>
      <input type="password" />
      <button type="submit">Verify Now</button>
    </form>
  );
};

export default TestForm;
