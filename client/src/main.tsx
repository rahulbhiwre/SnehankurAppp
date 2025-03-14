// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";

// createRoot(document.getElementById("root")!).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
