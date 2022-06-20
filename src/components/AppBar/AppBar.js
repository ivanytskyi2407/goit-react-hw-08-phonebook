import s from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export default function AppBar() {
  return (
    <div className="container">
      <header className={s.header}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
