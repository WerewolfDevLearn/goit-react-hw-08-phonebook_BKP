import { useEffect } from 'react';
import LoginForm from '../components/Forms/LoginForm';
import { useGetCurrentUseerQuery, useLoginUserMutation } from '../redux/authApi';
import { useDispatch } from 'react-redux';
import { addToken } from '../redux/authslice';

export default function LoginPage() {
  const [loginUser, { isSuccess, data }] = useLoginUserMutation();
  const { data: Cdata } = useGetCurrentUseerQuery();

  const dispatch = useDispatch();
  const user = {
    name: 'Adrian Cross',
    email: 'ggibb1247@gmailwe.com',
    password: 'examplepwd12345',
  };
  useEffect(() => {
    loginUser(user);
  }, []);
  useEffect(() => {
    if (isSuccess) {
      dispatch(addToken(data.token));
    }
  }, [dispatch, data, isSuccess]);
  return (
    <>
      <LoginForm />
    </>
  );
}
