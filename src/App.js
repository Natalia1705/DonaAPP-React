import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Donate } from "./views/Donate";
import { Details } from "./views/Details";
import Login from "./views/Login";
import Register from "./views/Register";
import YourCampaigns from "./views/YourCampaigns";
import CampaignsForm from "./views/Form/CampaignsForm";
import CampaignsForm2 from "./views/Form/CampaignsForm2";
import CampaignsForm3 from "./views/Form/CampaignsForm3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/donate" element={<Donate />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/your-campaigns" element={<YourCampaigns />} />
        <Route path="/campaignsForm" element={<CampaignsForm />} />
        <Route path="/campaignsForm2" element={<CampaignsForm2 />} />
        <Route path="/campaignsForm3" element={<CampaignsForm3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
