import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperation';
import authSelector from '../../../redux/auth/authSelector';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);

  return (
    <div>
      <span>Hi {name}!</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
