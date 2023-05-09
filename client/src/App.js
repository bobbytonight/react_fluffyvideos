/**/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

/** where the routes go to */

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Username />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </main>
  );
}








/**
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components *
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';


/** root routes *
const router = createBrowserRouter{
  {
    path : '/',
    element : <Username></Username>
  },
  {
    path : '/Password',
    element : <Password></Password>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/Profile',
    element : <Profile></Profile>
  },
  {
    path : '/Recovery',
    element : <Recovery></Recovery>
  },
  {
    path : '/Reset',
    element : <Reset></Reset>
  },
  {
    path : '/PageNotFound',
    element : <PageNotFound></PageNotFound>
  },
}

export default function App() {
  return (
    <main>
      <Router router={router}></Router>
    </main>
  )
}


*/