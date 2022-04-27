import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const nameinputRef = useRef();
  const ageinputRef = useRef();
  const [error, setError] = useState();

  const adduserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameinputRef.current.value;
    const enteredAge = ageinputRef.current.value;
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameinputRef.current.value = "";
    ageinputRef.current.value = "";
  };

  const ErrorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={ErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameinputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" ref={ageinputRef} />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
