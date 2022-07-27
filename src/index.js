import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom";
import Contact from "./Contact";
import Blog from "./Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <HashRouter> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/mywebsite" element={<App />} />
        <Route path="/mywebsite/contact" element={<Contact />} />
        <Route path="/mywebsite/blog" element={<Blog />} /> */}
      </Routes>
    {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
