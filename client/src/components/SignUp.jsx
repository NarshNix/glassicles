import { useState } from "react";
import axios from "axios";

import store from "../store/store";

function SignUp() {
  const [formDetails, setFormDetails] = useState({
    uName: "",
    email: "",
    password: "",
    cnfrmPassword: "",
  });

  const signUp = store((state) => state.signUp); // this is the function
  const token = store((state) => state.token); // this is the actual token value
  const [getToken, setGetToken] = useState(token); // stores local copy if needed

  function setForm(e) {
    const { name, value } = e.target;
    console.log(formDetails);
    setFormDetails((prevValue) => ({ ...prevValue, [name]: value }));
  }

  async function sendForm(e) {
    e.preventDefault();

    const res = await axios.post(`http://localhost:5000/users/signup`, {
      name: formDetails.uName,
      email: formDetails.email,
      password: formDetails.password,
      cnfrmPassword: formDetails.cnfrmPassword,
    });

    setGetToken(res.data.token);
    signUp(res.data.token);

    console.log(res.data.token);
    setFormDetails({
      uName: "",
      email: "",
      password: "",
      cnfrmPassword: "",
    });
  }

  return (
    <>
      <form onSubmit={sendForm}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="uName"
          value={formDetails.uName}
          onChange={setForm}
          id="username"
          placeholder="Username"
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formDetails.email}
          onChange={setForm}
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formDetails.password}
          onChange={setForm}
          placeholder="Password"
        />

        <label htmlFor="cPwd">Confirm Password</label>
        <input
          type="password"
          id="cPwd"
          name="cnfrmPassword"
          value={formDetails.cnfrmPassword}
          onChange={setForm}
        />

        <button onClick={sendForm}>Sgn Up</button>
      </form>
    </>
  );
}

export default SignUp;
