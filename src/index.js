import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

export const UserContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <App />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

root.render(<Root />);
