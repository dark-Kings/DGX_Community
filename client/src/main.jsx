// src/main.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ApiProvider } from "./utils/apiContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
);

