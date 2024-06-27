import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from 'react-router-dom';
import { PageLayout } from '../common/layouts';
import { NotFoundPage, ScreenPage } from '../pages';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Outlet />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<ScreenPage />} />
          </Route>
        </Route>
        <Route path="*" element={<PageLayout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
