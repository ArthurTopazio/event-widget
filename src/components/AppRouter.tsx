import { Navigate, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../routes';

const AppRouter = () => {

  const auth = false;

  return (
    <>
      {!auth
        ? <Routes>
          {publicRoutes.map((item) => {
            const Component = item.element;
            return <Route path={item.path} element={<Component />} key={item.path} />
          })}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        : <Routes>
          {privateRoutes.map((item) => {
            const Component = item.element;
            return <Route path={item.path} element={<Component />} key={item.path} />
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>}
    </>
  )
};

export default AppRouter; 
