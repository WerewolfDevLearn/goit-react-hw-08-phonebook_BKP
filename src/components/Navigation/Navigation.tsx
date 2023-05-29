import { NavLink } from 'react-router-dom';
import routes from '../routes';
import navStyle from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={navStyle.list}>
      <li key='NavigationContacts'>
        <NavLink to={routes.register} className={navStyle.navLink}>
          Register
        </NavLink>
      </li>
      <li key='NavigationLogin' className={navStyle.listItem}>
        <NavLink to={routes.login} className={navStyle.navLink}>
          Login
        </NavLink>
      </li>
      <li key='NavigationContacts'>
        <NavLink to={routes.contacts} className={navStyle.navLink}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;