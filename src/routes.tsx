import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import { User } from './pages/User';
import { CreateMeal } from './pages/CreateMeal';
import { EditMeal } from './pages/EditMeal';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/criarrefeicao/:id" element={<CreateMeal />} />
        <Route path="/user/editarrefeicao/:id/:refeicaoid" element={<EditMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
