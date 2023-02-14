import React, { useState } from "react";

import styles from "../../styles/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser(props) {
  const [enteredUser, setEnteredUser] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }

    setEnteredUser("");
    setAge("");
  };

  const usernameAddHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameAddHandler}
          value={enteredUser}
        />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}

export default AddUser;
