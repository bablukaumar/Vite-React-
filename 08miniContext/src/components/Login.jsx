import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="text-center text-green  font-bold">
      <h2>Login</h2>
      <span>UserName</span>
      <input
        type="text"
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {" "}
      <span>Password</span>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
