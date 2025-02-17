import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./component/navigation";
import { Home } from "./component/home";
import Features from "./component/features";
import Footer from "./component/footer";
import JsonData from "./data/data.json";
import GenerateEmailContent from "./component/pages/generate-email-content";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
            <Route path="/" element={<LandingPage data={landingPageData} />} />
            <Route path="/generate-email-content" element={<GenerateEmailContent />} />
    
        </Routes>
      </div>
    </Router>
  );
};

const LandingPage = ({ data }) => {
  return (
    <div>
      <Home data={data.Home} />
      <Features data={data.Features} />
      <Footer data={data.Footer} />
    </div>
  );
};

export default App;
