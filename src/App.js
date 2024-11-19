import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; // Dashboard Component
import Seller from './Seller'; // Seller Component
import Login from './Login'; // Login Component
import Buyer from './Buyer'; // Buyer Component
import BuyerOpportunities from './BuyerOpportunities';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/buyer" element={<Buyer />} />
      <Route path="/buyeropportunities" element={<BuyerOpportunities />} />
      
    </Routes>
    
  );
};

export default App;
