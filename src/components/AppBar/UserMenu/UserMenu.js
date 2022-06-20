import { Link } from 'react-router-dom';
export const UserMenu = () => {
  return (
    <div>
      <h2>Hi UserName!</h2>
      <Link exact="true" to="/">
        Logout
      </Link>
    </div>
  );
};
