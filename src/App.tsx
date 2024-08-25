import React from "react";
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />}>
          {route.children?.map((child, childIndex) => (
            <Route key={childIndex} path={child.path} element={<child.component />} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
