import axios from "axios";
import { useState } from "react";
import store from "../../store/store";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const login = store((state) => state.login);

  function changeForm(e) {
    const { name, value } = e.target;
    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  }

  async function sendForm(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        {
          email: form.email,
          password: form.password,
        }
      );

      const { token, user } = response.data;

      // ✅ Store in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user)); // Must stringify

      console.log("Login success:", response.data);
      login(token, user._id); // Call your state function to update UI
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  }

  return (
    <>
      <form onSubmit={sendForm}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={changeForm}
          placeholder="Email"
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={changeForm}
          placeholder="Password"
        />

        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default Login;
