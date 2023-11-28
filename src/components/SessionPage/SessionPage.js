import React, { useState } from "react";
import {
  setSession,
  getSession,
  clearSession,
} from "../../utils/SessionManager";

const SessionTestPage = () => {
  const [userData, setUserData] = useState({ username: "", isLoggedIn: false });

  const handleLogin = () => {
    const user = { username: "exampleUser", isLoggedIn: true };
    setSession(user);
    setUserData(user);
  };

  const handleLogout = () => {
    clearSession();
    setUserData({ username: "", isLoggedIn: false });
  };

  const simulateHijacking = () => {
    const sessionData = getSession();
    console.log("Session Data:", sessionData);
    if (sessionData) {
      const hijackedSession = { ...sessionData, username: "hacker" };
      setSession(hijackedSession);
      setUserData(hijackedSession);
    }
  };

  return (
    <div>
      <div className="session-page-container">
        <h1>Session Test Page</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={simulateHijacking}>Simulate Hijacking</button>
        <div>
          <h2>User Data:</h2>
          <p>Username: {userData.username}</p>
          <p>Logged In: {userData.isLoggedIn ? "Yes" : "No"}</p>
        </div>
      </div>

      <em><small>See console logs</small></em>
    </div>
  );
};

export default SessionTestPage;
