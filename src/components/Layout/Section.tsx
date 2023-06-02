import AppHeader from '../AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const styles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = () => {
  return (
    <div style={styles}>
      <AppHeader />
      <ToastContainer />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
