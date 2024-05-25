import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
