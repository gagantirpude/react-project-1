import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//! Styles Here
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss";

//! Components Here
import Header from "./components/Header";
import Footer from "./components/Footer";

//! Pages Here
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";

//! App Here
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};
//! Export App Here
export default App;
