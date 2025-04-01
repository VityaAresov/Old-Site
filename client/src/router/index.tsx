import { Suspense, FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Route as Path } from './routes';
import HomePage from '../views/HomePage';
import OurServicesPage from '../views/OurServicesPage';
import ScrollToTop from './ScrollToTop';
import GetInTouchPage from '../views/GetInTouchPage';
import WhoWeArePage from '../views/WhoWeArePage';
import OurWorksPage from '../views/OurWorksPage';

const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={Path.Home} element={<HomePage />} />
          <Route path={Path.Service} element={<OurServicesPage />} />
          <Route path={Path.GetInTouch} element={<GetInTouchPage />} />
          <Route path={Path.Studio} element={<WhoWeArePage />} />
          <Route path={Path.Works} element={<OurWorksPage />} />
          <Route path={Path.NotFound} element={<Navigate to={Path.Home} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
