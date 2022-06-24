// import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Home } from './Home/Home';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/authOperation';

export const App = () => {
  // const { status, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* {error && alert(error)} */}
        {/* {status === 'loading' && <Loader />} */}
      </Routes>
    </Suspense>
  );
};
