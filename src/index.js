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
import About from "./About";
import Teamdetails from "./Teamdetails";
import Teamdetails1 from "./Teamdetails1";
import Teamdetails2 from "./Teamdetails2";
import Teamdetails3 from "./Teamdetails3";
import Privacy from "./Privacy";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";
import Blog5 from "./Blog5";
import Blog6 from "./Blog6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <HashRouter> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/teamdetails" element={<Teamdetails />} />
        <Route path="/about/owen" element={<Teamdetails1 />} />
        <Route path="/about/amelia" element={<Teamdetails2 />} />
        <Route path="/about/sebastian" element={<Teamdetails3 />} />
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/blog1" element={<Blog1/>}/>
        <Route path="/blog2" element={<Blog2/>}/>
        <Route path="/blog3" element={<Blog3/>}/>
        <Route path="/blog4" element={<Blog4/>}/>
        <Route path="/blog5" element={<Blog5/>}/>
        <Route path="/blog6" element={<Blog6/>}/>
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
