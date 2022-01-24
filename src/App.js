import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Donate from './views/Donate';
import Details from './views/Details';
import CampaignsForm from './views/CampaignForm';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import YourCampaigns from './views/YourCampaigns';
import PrivateRoute from './common/PrivateRoute';
import HomePage from './views/HomePage';

const App = () => (
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/campaignform" element={<CampaignsForm />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/details" element={<Details />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/campaigns"
        element={
          <PrivateRoute>
            <YourCampaigns />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
