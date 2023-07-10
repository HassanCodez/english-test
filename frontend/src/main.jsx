import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./index.css";
import { store } from "./store/store.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankPage from "./containers/RankPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/rank" element={<RankPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
