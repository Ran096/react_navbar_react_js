import "./styles.css";
import React, {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home";

import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Navber from "./Components/Navber";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Router>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}
