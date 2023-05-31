import { useEffect } from 'react';
import RegisterForm from '../components/Forms/RegisterForm';
import { useCreateUserMutation } from '../redux/authApi';

export default function RegisterPage() {
  const [createUser, result] = useCreateUserMutation();

  // useEffect(() => {
  //   createUser(user);
  // }, []);

  return (
    <>
      <RegisterForm />
    </>
  );
}
