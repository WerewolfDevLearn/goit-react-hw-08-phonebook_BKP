import navStyle from '../Navigation/Navigation.module.css';

interface IUserMenu {
  userName: string;
  onLogout(): void;
}

function UserMenu({ userName, onLogout }: IUserMenu) {
  return (
    <ul className={navStyle.list}>
      <li key='userName' className={navStyle.navLink}>
        {userName}
      </li>
      <li key='logoutBtn'>
        <button onClick={onLogout} className={navStyle.navLink}>
          Log Out
        </button>
      </li>
    </ul>
  );
}
export default UserMenu;
