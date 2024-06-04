import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home.jsx';
import Layout from '../Layout/Layout.jsx';
import { PrivateRoute } from '../Routes/Private.jsx';
import { RestrictedRoute } from '../Routes/Restricted.jsx';

const Boards = lazy(() => import('../../pages/Boards/Boards.jsx'));
const Register = lazy(() => import('../Register/Register.jsx'));
const Login = lazy(() => import('../Login/Login.jsx'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path='/Task-Pro' element={<Home />}>
            <Route
              path='register'
              element={
                <RestrictedRoute component={<Register />} redirectTo='/login' />
              }
            />
            <Route
              path='login'
              element={
                <RestrictedRoute component={<Login />} redirectTo='/boards' />
              }
            />
          </Route>
          <Route
            path='/boards'
            element={
              <PrivateRoute component={<Boards />} redirectTo='/login' />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};
