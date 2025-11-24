import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

function App() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "") {
      dispatch(login({ username }));
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Lab 10 – Redux + JWT Demo</h1>

      {!token ? (
        <>
          <input
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2>Welcome, {user}</h2>
          <p><b>JWT Token:</b> {token}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
