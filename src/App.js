import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Donate } from "./views/Donate";
import { Details } from "./views/Details";
import CampaignsForm1 from "./views/CampaignsForm/campaigns1";
import CampaignsForm2 from "./views/CampaignsForm/campaigns2";
import CampaignsForm3 from "./views/CampaignsForm/campaigns3";
import Login from "./views/Login";
import Register from "./views/Register";
import YourCampaigns from "./views/YourCampaigns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/campaigns-form" element={<CampaignsForm1 />} />
        <Route path="/campaigns-form2" element={<CampaignsForm2 />} />
        <Route path="/campaigns-form3" element={<CampaignsForm3 />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/your-campaigns" element={<YourCampaigns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
