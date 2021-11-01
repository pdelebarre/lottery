import { useRef, useContext } from "react";
import {useHistory} from 'react-router-dom'

import AuthContext from "../../store/auth-context"

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory()
  const newPasswordInputRef = useRef();

  const authContext = useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC9w5B__QEBkVBqr4wo6ERUQ8ejDw2lQao";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authContext.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      history.replace('/')
    })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
