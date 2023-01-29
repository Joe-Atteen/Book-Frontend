import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:5000/signup", {
        name,
        email,
        password,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form action="" method="put">
        <input
          type="text"
          placeholder="Enter username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
