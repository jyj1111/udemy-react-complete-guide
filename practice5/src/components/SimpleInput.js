import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nametouch, setnameTouch] = useState(false);
  const [emailtouch, setemailTouch] = useState(false);
  const [formValid, setFormvalid] = useState(false);
  const nameValid = name.trim() !== "";
  const emailValid = email.includes("@");
  const nameinValid = !nameValid && nametouch;
  const emailinValid = !emailValid && emailtouch;
  useEffect(() => {
    if (nameValid && emailValid) {
      setFormvalid(true);
    } else {
      setFormvalid(false);
    }
  }, [nameValid, emailValid]);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameblurHandler = (e) => {
    setnameTouch(true);
  };

  const emailblurHandler = (e) => {
    setemailTouch(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setnameTouch(true);

    if (!nameValid) {
      return;
    }
    setName("");
    setEmail("");
    setemailTouch(false);
    setnameTouch(false);
  };
  const nameInputclasses = nameinValid
    ? "form-control invalid"
    : "form-control";
  const emailInputclasses = emailinValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputclasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameblurHandler}
          onChange={nameHandler}
          value={name}
        />
      </div>
      {nameinValid && <p className="error-text">Name must not be empty.</p>}
      <div className={emailInputclasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailblurHandler}
          onChange={emailHandler}
          value={email}
        />
        {emailinValid && <p className="error-text">Email must include @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
