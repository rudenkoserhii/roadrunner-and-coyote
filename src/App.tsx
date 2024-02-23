import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>Hey {user?.username}, welcome to my channel, with auth!</p>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
      <div className="App">
        <h1 className="App-title">React Amplify App</h1>
      </div>
    </>
  );
}

export default App;
