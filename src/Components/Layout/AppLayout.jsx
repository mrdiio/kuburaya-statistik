import { Outlet } from 'react-router-dom';

import AppNavbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />

      <div className="wrapper-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
