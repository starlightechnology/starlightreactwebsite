import React from "react"; // Import React to use JSX
import ReactDOM from "react-dom/client"; // Import ReactDOM from 'react-dom/client' for React 18
import App from "./App"; // Import your app component


const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root

root.render(
  <React.StrictMode>
    <App /> {/* This renders the App component */}
  </React.StrictMode>
);
