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
import Navbar from './components/navbar';
import PaymentPage from './views/PaymentPage';
import Error404 from './views/Error404';
import Edit from './views/Edit';
import Welcome from './components/Welcome';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/campaignform"
        element={
          <PrivateRoute>
            <CampaignsForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/donate/:id"
        element={
          <PrivateRoute>
            <Donate />
          </PrivateRoute>
        }
      />
      <Route path="/details/:id" element={<Details />} />
      <Route
        path="/details/edit/:id"
        element={
          <PrivateRoute>
            <Edit />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/confirm/:token" element={<Welcome />} />
      <Route
        path="/campaigns"
        element={
          <PrivateRoute>
            <YourCampaigns />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
