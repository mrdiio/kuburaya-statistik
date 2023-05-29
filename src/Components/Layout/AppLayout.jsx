import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import AppNavbar from './Navbar';

export default function AppLayout() {
  return (
    <>
      <AppNavbar />

      <Container className="pt-4">
        <div className="wrapper-content">
          <Outlet />
        </div>
      </Container>
    </>
  );
}
