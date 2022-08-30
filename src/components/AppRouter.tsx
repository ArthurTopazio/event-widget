import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { privateRoutes, publicRoutes } from '../routes';

const AppRouter = () => {

  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <>
      {!isAuth
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
