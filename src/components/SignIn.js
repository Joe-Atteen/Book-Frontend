import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form action="" method="">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
        <br />
        <p>OR</p>
        <br />
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
}

export default SignIn;
