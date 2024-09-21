import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationBar.tsx';

import DashBoard from './components/dashBoard.tsx';
import YourProfile from './components/yourProfile.tsx';
import Chat from './components/chat.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
      
      <BrowserRouter>
        <div className="flex">
          <NavigationBar />
          <div className="content w-4/5">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/admin/dashBoard" element={<DashBoard />} />
              <Route path="/admin/yourProfile" element={<YourProfile />} />
              <Route path="/admin/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    
   
  </React.StrictMode>,
);
